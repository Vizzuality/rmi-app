
import { createSelector } from 'reselect';

// constants
import { LANGUAGES_ORDER } from './language-bar-mobile-constants';

const languages = state => state.language.list;

export const parseLanguages = createSelector(
  languages,
  (_languages = []) => {
    if (!_languages.length) return [];
    // sorts languages
    const sortedLanguages = LANGUAGES_ORDER.map(languageCode =>
      _languages.find(language => language.code === languageCode));

    // updates Indonesia name
    const indonesiaIndex = sortedLanguages.findIndex(language => language.code === 'id');

    if (indonesiaIndex >= 0) {
      sortedLanguages[indonesiaIndex] = {
        ...sortedLanguages[indonesiaIndex],
        name: 'Indonesia'
      };
    }

    // updates Chinese name
    const chineseIndex = sortedLanguages.findIndex(language => language.code === 'zh');

    if (chineseIndex >= 0) {
      sortedLanguages[chineseIndex] = {
        ...sortedLanguages[chineseIndex],
        name: '简体中文'
      };
    }

    return sortedLanguages;
  }


);

export default { parseLanguages };
