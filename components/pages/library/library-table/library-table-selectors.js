
import { createSelector } from 'reselect';

const documents = state => state.documents.list;

export const parseDocuments = createSelector(
  [documents],
  (_documents = []) => _documents.map(document => ({
    id: document.id,
    name: document.name,
    company: (document.company || {}).name || '-',
    url: {
      label: document.url ? `${document.url.substring(0, 50)}...` : null,
      value: document.url
    },
    downloadLink: document['download-link']
  }))
);

export default { parseDocuments };
