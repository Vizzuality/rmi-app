import { handleModule } from 'redux-tools';
import { reducer as toastrReducer } from 'react-redux-toastr';

// common modules
import routesModule from 'modules/routes';
import languageModule from 'modules/language';
import staticContentModule from 'modules/static-content';

// pages modules
import * as LeadingPracticesModule from 'components/pages/leading-practices';

export default {
  toastr: toastrReducer,
  routes: handleModule(routesModule),
  language: handleModule(languageModule),
  leadingPracticesPage: handleModule(LeadingPracticesModule),
  staticContent: handleModule(staticContentModule)
};
