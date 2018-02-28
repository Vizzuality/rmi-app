import { handleModule } from 'redux-tools';
import { reducer as toastrReducer } from 'react-redux-toastr';

// common modules
import routesModule from 'modules/routes';
import languageModule from 'modules/language';
import navigationModule from 'modules/navigation';
import staticContentModule from 'modules/static-content';
import companiesModule from 'modules/companies';
import countriesModule from 'modules/countries';
import commoditiesModule from 'modules/commodities';
import indicatorsModule from 'modules/indicators';
import mineSitesModule from 'modules/mine-sites';
import documentsModule from 'modules/documents';

// pages modules
import * as LeadingPracticesModule from 'components/pages/leading-practices';
import * as CompaniesModule from 'components/pages/companies';
import * as CompaniesDetailModule from 'components/pages/companies-detail';
import * as MineSitesPageModule from 'components/pages/mine-sites';

export default {
  toastr: toastrReducer,
  routes: handleModule(routesModule),
  language: handleModule(languageModule),
  navigation: handleModule(navigationModule),
  companies: handleModule(companiesModule),
  countries: handleModule(countriesModule),
  commodities: handleModule(commoditiesModule),
  indicators: handleModule(indicatorsModule),
  mineSites: handleModule(mineSitesModule),
  documents: handleModule(documentsModule),
  leadingPracticesPage: handleModule(LeadingPracticesModule),
  companiesPage: handleModule(CompaniesModule),
  companiesDetailPage: handleModule(CompaniesDetailModule),
  mineSitesPage: handleModule(MineSitesPageModule),
  staticContent: handleModule(staticContentModule)
};
