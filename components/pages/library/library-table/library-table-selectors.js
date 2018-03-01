
import { createSelector } from 'reselect';

const documents = state => state.documents.list;

export const parseDocuments = createSelector(
  [documents],
  (_documents = []) => _documents.map(document => ({
    id: document.id,
    name: document.name,
    company: (document.company || {}).name || '-',
    url: document.url,
    downloadLink: document['download-link']
  }))
);

export default { parseDocuments };
