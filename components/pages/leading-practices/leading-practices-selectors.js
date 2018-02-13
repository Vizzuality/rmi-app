
import { createSelector } from 'reselect';

const topics = state => state.leadingPracticesPage.topics.list;

export const parseTopics = createSelector(
  [topics],
  (_topics = []) => _topics.map(topic => ({ label: topic.name, value: topic.id }))
);

export default {
  parseTopics
};
