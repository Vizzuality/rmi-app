
import { createSelector } from 'reselect';

const documentMineSites = state => state.documentMineSites.list

export const parseAssessments = createSelector(
  [documentMineSites],
  (_documentMineSites = {}) => (_documentMineSites || []).map((dms = {}) => ({
      id: dms.document.id,
      title: dms.document.name,
      indicators: (dms.indicators || []).map(indicator => indicator.code).join(', '),
      url: {
        label: dms.document.url ? `${dms.document.url.substring(0, 50)}...` : null,
        value: dms.document.url
      },
      downloadLink: dms.document['download-link']
    })
  )
);

export default { parseAssessments };
