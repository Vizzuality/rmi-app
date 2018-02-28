
import { createSelector } from 'reselect';

const documents = state => state.documents.list;

export const parseAssessments = createSelector(
  [documents],
  (_documents = []) => _documents.map(document => ({
    id: document.id,
    title: document.name,
    url: {
      original: document.url,
      title: (document.url || '').length > 100 ? `${document.url.slice(0, 100)}...` : document.url
    },
    downloadLink: document['download-link']
  }))
);

export default { parseAssessments };
