# FieldWise final interactive pitch

This is one fixed, fact-based FieldWise presentation. It contains no presenter setup, no alternative content mode, no pending placeholders, and no physical-prop cue.

The permanent team details are:

- FieldWise
- Suhruth Akuthota, Joel Johnson, Vishu Paramkusham

## Present

From this folder, run:

```powershell
python serve.py --with-dashboard
```

Open `http://localhost:8765`.

Slides 1–5 make up the timed five-minute presentation. Slide 6 is the live dashboard demo and happens after the pitch; opening it pauses the pitch clock automatically.

The presentation predicts saved-project grain yield, `YLD_BE`, in bushels per acre. It does not claim to estimate General Combining Ability. The deck reports the locked 2008 result honestly: 8.84 bu/acre line MAE and a −4.70 bu/acre Top-50 selection loss. No line receives a production advancement recommendation.

The demo can embed the existing dashboard at `http://localhost:8501`. If that is not available, use the Saved output tab for the verified read-only candidate inspector.

## Controls

Right/Left arrows, Space, and Page Down/Page Up navigate. `N` opens notes, `T` starts or pauses the timer, `F` toggles fullscreen, and `Esc` returns from the demo.

## Evidence sources

- `../fieldwise_phase1/outputs/phase5/FINAL_MODEL_CARD.md`
- `../fieldwise_phase1/outputs/phase5/presentation/chart1_data.csv`
- `../fieldwise_phase1/outputs/phase5/presentation/chart2_data.csv`
- `../fieldwise_phase1/outputs/phase5/final_recommendations.csv`
