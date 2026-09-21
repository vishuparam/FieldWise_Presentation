window.PITCH_CONTENT = {
  team: 'FieldWise',
  members: 'Suhruth Akuthota, Joel Johnson, Vishu Paramkusham',
  dashboard: 'https://field-wise.streamlit.app/',
  target: 'Corn yield',
  targetExplanation: 'We predict how much corn each line may grow, then help breeders choose which lines to test next.',
  targetFootnote: 'Yield is measured in bushels per acre.',
  angleTitle: 'Choose promising lines with less guesswork',
  angleExplanation: 'We compare several prediction methods. When they strongly disagree, we treat that line as a riskier choice.',
  angleFootnote: 'Our rule combines past performance with how much the models agree.',
  inputs: [
    ['Past field results', 'How each corn line performed before'],
    ['Genetic information', 'DNA patterns for each corn line'],
    ['Field conditions', 'Location, soil, and earlier weather']
  ],
  modelTitle: 'Make a prediction',
  modelCopy: 'We compare several ways to predict yield, then look for lines where the models mostly agree.',
  outputTitle: 'Choose lines fairly',
  outputCopy: 'We compare the same lines at the same two test locations.',
  validation: [
    ['Clean the data', 'Match records carefully and remove incomplete records.'],
    ['Test the future', 'Train on earlier years, then test later years and new groups of corn.'],
    ['Final check · 2008', 'Choose the method first, then test it on a year it never saw.']
  ],
  resultsTitle: 'What the tests showed',
  chartTitles: ['Results changed from year to year', 'The final test called for caution'],
  accuracy: '8.84',
  accuracyUnit: 'bu/acre average error',
  resultSummary: 'In the final 2008 test, the 50 selected lines averaged 183.39 bu/acre compared with 188.09 for all eligible lines. We used that result to recommend a smaller follow-up test.',
  decisionTitle: 'Retest before committing production plots',
  decisionCopy: 'Advance no line as proven superior. The saved exploratory shortlist begins with:',
  lineIds: ['C2.449.17.0', 'C2.449.41.0', 'C2.449.71.0'],
  scopeTitle: 'A two-site decision, not a universal ranking',
  scopeCopy: 'The broad ranking uses equal weights across the shared sites because site-specific results were less consistent. The locked broad result still failed.',
  opportunityTitle: '2,326 plot-equivalents, conditionally',
  opportunityCopy: 'A 50-line, two-site pilot would use 100 plot-equivalents instead of 2,426 for all 1,213 lines at one replicate. The analysis saved no plots and did not demonstrate genetic gain.',
  limitsTitle: 'The shortlist is too narrow to deploy',
  limitsCopy: 'Thirty-eight of 50 lines come from one population, and the two-site cohort covers only 7.6% of tested 2008 lines. Next: an independent, population-balanced pilot.',
  closing: 'FieldWise helps turn a big guess into a smaller, safer next test.',
  source: 'Saved Phase 5 model card and chart CSVs; Phase 4 prospective evaluation. Retrospective evidence, not a new result.'
};

window.PITCH_NOTES = {
  budgets: [30, 35, 35, 50, 30, 90],
  labels: ['The choice', 'Our approach', 'The method', 'Key results', 'The decision', 'Live demo'],
  scripts: [
    'Corn breeders have many possible plants to test, but only so much land and time. FieldWise helps them choose which plants deserve the next field test.',
    'We predict corn yield, or how much corn a line may grow. We also check whether several prediction methods agree. When they disagree, we treat that choice more carefully.',
    'We used past field results, DNA information, and field conditions. We trained on earlier years, then tested on later years the model had never seen. That helps us check whether the prediction works beyond old data.',
    'The left chart shows that our results changed from year to year. The right chart shows our final check. At 50 lines, the selected group did not beat the overall group. That told us to stay careful and test again before making a bigger decision.',
    'FieldWise gives breeders a smaller list to test next, rather than claiming it found the final winners. A 50-line test at two locations is a practical next step. The key idea is simple: use data to make the next test safer.',
    'Now we will show the website. First, notice the overview: it explains the decision in plain language. Next, we will open one candidate line, then show how the website builds a 50-line test list. Finally, the model page shows why FieldWise recommends a careful follow-up test.'
  ]
};



