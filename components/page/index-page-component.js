import { PureComponent } from 'react';

// actions
import { setRoute } from 'modules/routes/routes-actions';
import { setLanguage } from 'modules/language/languages-actions';
import { mobileParser } from 'react-responsive-redux';
import { setMobileDetect } from 'modules/responsive/responsive-actions';
import { getResultsTree, getAboutTree } from 'modules/navigation/navigation-actions';
import { getIndicators } from 'modules/indicators/indicators-actions';

class Page extends PureComponent {
  static async getInitialProps({ pathname, query, store, req, isServer }) {
    const isFoundation = pathname.includes('foundation');
    // sets routing
    store.dispatch(setRoute({
      root: isFoundation ? 'foundation' : 'index',
      pathname: pathname.split('/')[1],
      tab: pathname.split('/')[2],
      query
    }));

    // Mobile detection
    if (isServer) {
      const mobileDetect = mobileParser(req);
      store.dispatch(setMobileDetect(mobileDetect));
    }

    // retrieve resuls tree to populate navigation
    if (!isFoundation) {
      await store.dispatch(getIndicators({ 'filter[kind]': 'issue_areas' }));
      await store.dispatch(getResultsTree({}));
    }

    // retrieves about tree to populate navigation
    if (isFoundation) {
      await store.dispatch(getAboutTree({ include: ['about-sections'].join(',') }));
    }

    // sets page language
    if (query.language) store.dispatch(setLanguage(query.language));
  }
}

export default Page;
