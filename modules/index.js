import { handleModule } from 'redux-tools';

// modules
import routesModule from 'modules/routes';
import languageModule from 'modules/language';

export default {
  routes: handleModule(routesModule),
  language: handleModule(languageModule)
};
