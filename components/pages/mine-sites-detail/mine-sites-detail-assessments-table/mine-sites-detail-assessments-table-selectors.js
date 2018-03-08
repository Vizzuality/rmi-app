
import { createSelector } from 'reselect';

const mineSite = state => state.mineSites.list[0]

export const parseAssessments = createSelector(
  [mineSite],
  (_mineSite = {}) => (_mineSite['document-mine-sites'] || []).map(doc => ({
      id: doc.document.id,
      title: doc.document.name,
      indicators: doc.indicators.map(indicator => indicator.code).join(', '),
      url: {
        label: doc.document.url ? `${doc.document.url.substring(0, 50)}...` : null,
        value: doc.document.url
      },
      downloadLink: doc.document['download-link']
    })
  )
);

export default { parseAssessments };
