
import { createSelector } from 'reselect';

const documents = state => state.documents.list;

export const parseAssessments = createSelector(
  [documents],
  (_documents = []) => _documents.map(document => ({
    id: document.id,
    title: document.name,
    url: {
      label: document.url ? document.url.substring(0, 50) + '...' : null,
      value: document.url
    },
    downloadLink: document['download-link']
  }))
);

export default { parseAssessments };
