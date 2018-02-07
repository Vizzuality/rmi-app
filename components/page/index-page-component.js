import { PureComponent } from 'react';

// actions
import { setRoute } from 'modules/routes/routes-actions';
import { setLanguage } from 'modules/language/languages-actions';

class Page extends PureComponent {
  static async getInitialProps({ pathname, query, store }) {
    // sets routing
    store.dispatch(setRoute({
      root: pathname.includes('foundation') ? 'foundation' : 'index',
      pathname: pathname.split('/')[1],
      query
    }));

    // sets page language
    if (query.language) store.dispatch(setLanguage(query.language));
  }
}

export default Page;
