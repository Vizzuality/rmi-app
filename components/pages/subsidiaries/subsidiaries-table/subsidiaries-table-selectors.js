
import { createSelector } from 'reselect';

const subsidiaries = state => state.subsidiaries.list;
const currentLanguage = state => state.language.current;

export const parseSubsidiaries = createSelector(
  [subsidiaries, currentLanguage],
  (_subsidiaries = [], _currentLanguage) => _subsidiaries.map(subsidiary => ({
    id: subsidiary.id,
    name: subsidiary.name,
    company: (subsidiary.company || {}).name || '-',
    companyId: (subsidiary.company || {}).id || '-',
    country: (subsidiary.country || {}).name || '-',
    language: _currentLanguage
  }))
);

export default { parseSubsidiaries };
