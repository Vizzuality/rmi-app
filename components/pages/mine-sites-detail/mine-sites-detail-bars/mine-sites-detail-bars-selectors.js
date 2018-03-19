
import { createSelector } from 'reselect';
import sortBy from 'lodash/sortBy';


const scores = state => (state.mineSites.list[0] || {}).scores;

export const getOverallScore = createSelector(
  [scores],
  (_scores = []) => (_scores.find(score => score.kind === 'overal_mine_site') || {}).value || '-'
);

export const getScores = createSelector(
  [scores],
  (_scores = []) => sortBy(_scores.filter(score => score.kind == 'indicator_mine_site'), score => score.indicator.code).map(score => ({
    id: score.id,
    name: (score.indicator || {}).code,
    value: score.value
  }))
);

export default {
  getOverallScore,
  getScores
};
