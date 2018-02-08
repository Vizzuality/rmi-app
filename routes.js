// https://github.com/fridays/next-route
const nextRoutes = require('next-routes');

const routes = nextRoutes();

// ========================= APP ROUTES =====================
// Index routes
routes.add('index', '/:language?', 'index');
routes.add('results', '/:language?/results/:year?', 'results');
routes.add('leading-practices', '/:year?/leading-practices', 'leading-practices');
routes.add('companies', '/:year?/companies/:company?', 'companies');
// routes.add('mine-sites', '/:year/mine-sites', 'mine-sites');

// Foundation routes
routes.add('foundation', '/foundation', 'foundation');
routes.add('foundation-a', '/foundation/foundation-a', 'foundation-pages/foundation-a-page');
routes.add('foundation-b', '/foundation/foundation-b', 'foundation-pages/foundation-b-page');

module.exports = routes;
