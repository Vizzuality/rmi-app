import { handleModule } from 'redux-tools';
import { reducer as toastrReducer } from 'react-redux-toastr';

// common modules
import routesModule from 'modules/routes';
import languageModule from 'modules/language';

// pages modules
import * as LeadingPracticesModule from 'components/pages/leading-practices';
import * as foundationHomepageModule from 'components/pages/foundation/homepage';

export default {
  toastr: toastrReducer,
  routes: handleModule(routesModule),
  language: handleModule(languageModule),
  leadingPracticesPage: handleModule(LeadingPracticesModule),
  foundationHomepage: handleModule(foundationHomepageModule)
};
