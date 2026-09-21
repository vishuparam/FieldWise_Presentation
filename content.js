window.PITCH_CONTENT = {
  team: 'FieldWise',
  members: 'Suhruth Akuthota, Joel Johnson, Vishu Paramkusham',
  dashboard: 'https://field-wise.streamlit.app/',
  target: 'Grain yield · bu/acre',
  targetExplanation: 'Predict how many bushels per acre each maize line could produce, then rank lines for field testing.',
  targetFootnote: 'Saved project target: grain yield. FieldWise does not claim to estimate General Combining Ability.',
  angleTitle: 'Avoid uncertain picks, not just low predictions',
  angleExplanation: 'We compare four prediction methods with a historical baseline. When the methods disagree, we lower that line’s score because the prediction is less trustworthy.',
  angleFootnote: 'Selection rule: historical yield minus model disagreement. We tested whether avoiding uncertain picks improves decisions when plots are scarce.',
  inputs: [
    ['Past field results', 'Yield for each line, year, and location'],
    ['Genetic information', 'DNA markers connected to each candidate line'],
    ['Field conditions', 'Location, soil, and earlier weather only']
  ],
  modelTitle: 'Compare several ways to predict',
  modelCopy: 'We compare four different prediction approaches with a simple past-performance baseline. We keep the rule that subtracts model disagreement from historical yield.',
  outputTitle: 'Make a fair comparison',
  outputCopy: 'Average repeated measurements, give both shared sites equal weight, and rank each unique line.',
  validation: [
    ['Clean & connect', 'Standardize IDs, remove parent records, and learn missing-value rules from training data.'],
    ['Test what is unfamiliar', 'Predict later years and separately test populations the model never saw during training.'],
    ['Final test · 2008', 'Freeze the model, selection rule, and 50-line budget before checking 2008.']
  ],
  resultsTitle: 'The locked test changed the decision',
  chartTitles: ['Risk adjustment missed two of four future years', 'Every tested budget trailed the 2008 field mean'],
  accuracy: '8.84',
  accuracyUnit: 'bu/acre · line MAE',
  resultSummary: 'Locked 2008: the fixed Top-50 list averaged 183.39 bu/acre versus 188.09 for the eligible cohort, a −4.70 bu/acre selection loss. No production advancement recommendation.',
  decisionTitle: 'Retest before committing production plots',
  decisionCopy: 'Advance no line as proven superior. The saved exploratory shortlist begins with:',
  lineIds: ['C2.449.17.0', 'C2.449.41.0', 'C2.449.71.0'],
  scopeTitle: 'A two-site decision, not a universal ranking',
  scopeCopy: 'The broad ranking uses equal weights across the shared sites because site-specific results were less consistent. The locked broad result still failed.',
  opportunityTitle: '2,326 plot-equivalents, conditionally',
  opportunityCopy: 'A 50-line, two-site pilot would use 100 plot-equivalents instead of 2,426 for all 1,213 lines at one replicate. The analysis saved no plots and did not demonstrate genetic gain.',
  limitsTitle: 'The shortlist is too narrow to deploy',
  limitsCopy: 'Thirty-eight of 50 lines come from one population, and the two-site cohort covers only 7.6% of tested 2008 lines. Next: an independent, population-balanced pilot.',
  closing: 'The next investment is a better test.',
  source: 'Saved Phase 5 model card and chart CSVs; Phase 4 prospective evaluation. Retrospective evidence, not a new result.'
};

window.PITCH_NOTES = {
  budgets: [35, 45, 50, 105, 65, 0],
  labels: ['The choice', 'Our approach', 'The method', 'Key results', 'The decision', 'Live demo'],
  scripts: [
    'Breeders cannot test every maize line at every site. When the plot budget shrinks, a wrong ranking wastes land, labor, and an entire growing season. FieldWise asks a narrower question: can planting-time information rank candidates well enough to earn a place in the next field test?',
    'Our saved project predicts grain yield, YLD_BE, in bushels per acre. It does not estimate General Combining Ability. We compare several genomic learners with a historical baseline, then test a cautious decision rule: historical yield minus disagreement among four genomic models. The goal is exploratory retesting, not a production promise.',
    'We join historical yield, progeny markers, and site context through normalized line IDs and year-location keys. Only planting-time information enters the model. We evaluate future years from 2004 through 2007 and whole unseen populations. We freeze the model, risk rule, and 50-line budget before evaluating 2008.',
    'The left chart explains why the team stayed cautious. The risk-adjusted rule had a positive average but missed two of four future years. The right chart is decisive: every locked 2008 shortlist trailed its eligible cohort. At the fixed Top-50 budget, selected lines averaged 183.39 bushels per acre against 188.09, a minus 4.70 selection loss. Line MAE was 8.84 bushels per acre. That is an error in yield units, not a percent accuracy.',
    'We do not advance any line as proven superior. C2.449.17.0, C2.449.41.0, and C2.449.71.0 remain exploratory retest candidates only. A future 50-line, two-site pilot could use 2,326 fewer plot-equivalents, but this analysis did not save plots or show genetic gain. The shortlist is concentrated: 38 of 50 lines come from one population. The next step is an independent, population-balanced pilot with predeclared sites, weights, budget, and uncertainty calibration.',
    'The timed pitch is complete. Now we can open the FieldWise dashboard and inspect the exploratory saved output. The demo is separate from the five-minute presentation and does not change the result: no production advancement recommendation.'
  ]
};



