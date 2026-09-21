"""Create a local, traceable snapshot. Reads existing project outputs; never trains."""
import csv
import hashlib
import json
from pathlib import Path

HERE = Path(__file__).resolve().parent
SOURCE = HERE.parent / 'fieldwise_phase1' / 'outputs' / 'phase5'


def records(relative):
    with (SOURCE / relative).open(encoding='utf-8-sig', newline='') as stream:
        return list(csv.DictReader(stream))


def main():
    candidates = []
    for row in records('final_recommendations.csv'):
        candidates.append({
            'id': row['LINE_UNIQUE_ID'], 'population': row['population'],
            'predicted': float(row['predicted_yield']),
            'disagreement': float(row['uncertainty_proxy']),
            'score': float(row['risk_adjusted_score']),
            'rank': int(float(row['portfolio_rank'])),
            'pilot': row['advance_for_pilot'].lower() == 'true',
            'production': row['advance_for_production_plots'].lower() == 'true',
            'reason': row['reason_for_selection']
        })
    candidates.sort(key=lambda row: (row['rank'], row['id']))
    chart1 = [{'year': int(r['target_year']), 'policy': r['policy'],
               'gain': float(r['top_10_percent_gain_bu_per_acre'])}
              for r in records('presentation/chart1_data.csv')]
    chart2 = [{'budget': int(r['budget_lines']), 'gain': float(r['selection_gain_bu_per_acre'])}
              for r in records('presentation/chart2_data.csv')]
    sources = ['final_recommendations.csv', 'presentation/chart1_data.csv',
               'presentation/chart2_data.csv', 'FINAL_MODEL_CARD.md']
    manifest = {f'fieldwise_phase1/outputs/phase5/{name}': hashlib.sha256((SOURCE / name).read_bytes()).hexdigest()
                for name in sources}
    assert len(chart1) == 12 and len(chart2) == 4
    assert candidates and len({r['id'] for r in candidates}) == len(candidates)
    assert not any(r['production'] for r in candidates), 'Re-review decision copy: production status changed'
    evidence = {'candidates': candidates, 'chart1': chart1, 'chart2': chart2, 'sources': manifest}
    (HERE / 'evidence.js').write_text('/* Generated from existing saved outputs. See build_evidence.py. */\nwindow.PITCH_EVIDENCE = ' + json.dumps(evidence, ensure_ascii=True, separators=(',', ':'), allow_nan=False) + ';\n', encoding='utf-8')
    print(f'Exported {len(candidates)} actual candidate records and two chart datasets to fieldwise_pitch/evidence.js')


if __name__ == '__main__':
    main()
