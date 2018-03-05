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
routes.add('companies', '/companies/:company?', 'companies');
routes.add('mine-sites', '/mine-sites/:mineSite?', 'mine-sites');
routes.add('results-overall', '/:language?/results/overall', 'results-overall');
routes.add('results-detail', '/:language?/results/thematic/:id', 'results-detail');
routes.add('results', '/:language?/results/:section?', 'results');
routes.add('leading-practices', '/:year?/leading-practices', 'leading-practices');
routes.add('library', '/:language?/library', 'library');
routes.add('index', '/:language?', 'index');

module.exports = routes;
