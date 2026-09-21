"""Serve the separate pitch; optionally launch the original dashboard unchanged."""
import argparse
import functools
import http.server
import os
from pathlib import Path
import socket
import subprocess
import sys

HERE = Path(__file__).resolve().parent


def listening(port):
    with socket.socket() as connection:
        connection.settimeout(0.5)
        return connection.connect_ex(('127.0.0.1', port)) == 0


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--port', type=int, default=8765)
    parser.add_argument('--with-dashboard', action='store_true')
    args = parser.parse_args()
    handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=str(HERE))
    server = http.server.ThreadingHTTPServer(('127.0.0.1', args.port), handler)
    dashboard = None
    log = None
    try:
        if args.with_dashboard and not listening(8501):
            project = HERE.parent / 'fieldwise_phase1'
            if not (project / 'app.py').exists():
                raise FileNotFoundError('Original dashboard not found. Set its URL in presentation Setup instead.')
            log = (HERE / 'dashboard.log').open('w', encoding='utf-8')
            environment = dict(os.environ, PYTHONDONTWRITEBYTECODE='1')
            dashboard = subprocess.Popen([
                sys.executable, '-m', 'streamlit', 'run', str(project / 'app.py'),
                '--server.address', '127.0.0.1', '--server.port', '8501',
                '--server.headless', 'true', '--browser.gatherUsageStats', 'false',
            ], cwd=project, env=environment, stdout=log, stderr=subprocess.STDOUT,
                creationflags=getattr(subprocess, 'CREATE_NO_WINDOW', 0))
            print('Starting existing dashboard at http://localhost:8501; logs: fieldwise_pitch/dashboard.log', flush=True)
        elif args.with_dashboard:
            print('Port 8501 is already active; reusing it. Confirm it is your dashboard.', flush=True)
        print(f'Presentation: http://localhost:{args.port}', flush=True)
        print('Ctrl+C stops the presentation and only the dashboard process launched here.', flush=True)
        server.serve_forever()
    except KeyboardInterrupt:
        print('\nPresentation stopped.', flush=True)
    finally:
        server.server_close()
        if dashboard is not None:
            dashboard.terminate()
            try:
                dashboard.wait(timeout=5)
            except subprocess.TimeoutExpired:
                dashboard.kill()
        if log is not None:
            log.close()


if __name__ == '__main__':
    main()
