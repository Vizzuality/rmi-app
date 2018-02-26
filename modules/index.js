import { handleModule } from 'redux-tools';
import { reducer as toastrReducer } from 'react-redux-toastr';

// common modules
import routesModule from 'modules/routes';
import languageModule from 'modules/language';
import navigationModule from 'modules/navigation';
import staticContentModule from 'modules/static-content';
import companiesModules from 'modules/companies';
import countriesModules from 'modules/countries';
import commoditiesModules from 'modules/commodities';
import indicatorsModules from 'modules/indicators';

// pages modules
import * as LeadingPracticesModule from 'components/pages/leading-practices';
import * as CompaniesModule from 'components/pages/companies';
import * as CompaniesDetailModule from 'components/pages/companies-detail';
import * as MineSitesModule from 'components/pages/mine-sites';

export default {
  toastr: toastrReducer,
  routes: handleModule(routesModule),
  language: handleModule(languageModule),
  navigation: handleModule(navigationModule),
  companies: handleModule(companiesModules),
  countries: handleModule(countriesModules),
  commodities: handleModule(commoditiesModules),
  indicators: handleModule(indicatorsModules),
  leadingPracticesPage: handleModule(LeadingPracticesModule),
  companiesPage: handleModule(CompaniesModule),
  companiesDetailPage: handleModule(CompaniesDetailModule),
  mineSitesPage: handleModule(MineSitesModule),
  staticContent: handleModule(staticContentModule)
};
