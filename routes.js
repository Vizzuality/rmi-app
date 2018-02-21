// https://github.com/fridays/next-route
const nextRoutes = require('next-routes');

const routes = nextRoutes();

// ========================= APP ROUTES =====================
// Foundation routes
routes.add('foundation', '/foundation', 'foundation');
routes.add('mining-society', '/foundation/mining-society', 'foundation-pages/mining-society');
routes.add('about', '/about/:section?', 'foundation-pages/about');
routes.add('media', '/media/:section?', 'foundation-pages/media');
routes.add('contact', '/foundation/contact', 'foundation-pages/contact');

// Index routes
routes.add('index', '/:language?', 'index');
routes.add('results', '/:language?/results/:year?', 'results');
routes.add('leading-practices', '/:year?/leading-practices', 'leading-practices');
routes.add('companies', '/:year?/companies/:company?', 'companies');
routes.add('mine-sites', '/:year?/mine-sites/:mineSite?', 'mine-sites');

module.exports = routes;
