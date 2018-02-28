
import { createSelector } from 'reselect';


const scores = state => (state.mineSites.list[0] || {}).scores;

export const getOverallScore = createSelector(
  [scores],
  (_scores = []) => (_scores.find(score => score.kind === 'overal_mine_site') || {}).value || '-'
);

export const getScores = createSelector(
  [scores],
  (_scores = []) => _scores.map(score => ({
    id: score.id,
    name: score.kind === 'overal_mine_site' ?
      'MS' : (score.indicator || {}).code,
    value: score.value
  }))
);

export default {
  getOverallScore,
  getScores
};
