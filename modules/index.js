import { handleModule } from 'redux-tools';

// common modules
import appModule from 'modules/app';
import routesModule from 'modules/routes';
import responsiveModule from 'modules/responsive';
import languageModule from 'modules/language';
import navigationModule from 'modules/navigation';
import staticContentModule from 'modules/static-content';
import companiesModule from 'modules/companies';
import countriesModule from 'modules/countries';
import commoditiesModule from 'modules/commodities';
import indicatorsModule from 'modules/indicators';
import mineSitesModule from 'modules/mine-sites';
import documentsModule from 'modules/documents';
import scoresModule from 'modules/scores';
import documentMineSitesModule from 'modules/document-mine-sites';
import subsidiariesModule from 'modules/subsidiaries';
import staticPagesModule from 'modules/static-pages';

// components modules
import * as CompaniesFiltersModule from 'components/pages/companies/companies-filters';

// pages modules
import * as LeadingPracticesModule from 'components/pages/leading-practices';
import * as CompaniesModule from 'components/pages/companies';
import * as CompaniesDetailModule from 'components/pages/companies-detail';
import * as MineSitesPageModule from 'components/pages/mine-sites';
import * as ResultsOverallPageModule from 'components/pages/results-overall';
import * as ResultsDetailPageModule from 'components/pages/results-detail';

export default {
  app: handleModule(appModule),
  responsive: handleModule(responsiveModule),
  routes: handleModule(routesModule),
  language: handleModule(languageModule),
  navigation: handleModule(navigationModule),
  companies: handleModule(companiesModule),
  countries: handleModule(countriesModule),
  commodities: handleModule(commoditiesModule),
  indicators: handleModule(indicatorsModule),
  subsidiaries: handleModule(subsidiariesModule),
  mineSites: handleModule(mineSitesModule),
  documents: handleModule(documentsModule),
  documentMineSites: handleModule(documentMineSitesModule),
  scores: handleModule(scoresModule),
  leadingPracticesPage: handleModule(LeadingPracticesModule),
  companiesPage: handleModule(CompaniesModule),
  companiesFilters: handleModule(CompaniesFiltersModule),
  companiesDetailPage: handleModule(CompaniesDetailModule),
  mineSitesPage: handleModule(MineSitesPageModule),
  resultsOverallPage: handleModule(ResultsOverallPageModule),
  resultsDetailPage: handleModule(ResultsDetailPageModule),
  staticContent: handleModule(staticContentModule),
  staticPages: handleModule(staticPagesModule)
};
