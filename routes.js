// https://github.com/fridays/next-route
const nextRoutes = require('next-routes');

const routes = nextRoutes();

// ========================= APP ROUTES =====================
// Foundation routes
routes.add('context', '/:language/foundation/context', 'foundation-pages/mining-society');
routes.add('about', '/:language/foundation/about/:section?', 'foundation-pages/about');
routes.add('media', '/:language/foundation/media/:section?', 'foundation-pages/media');
routes.add('contact', '/:language/foundation/contact', 'foundation-pages/contact');
routes.add('methodology-year', '/:language/foundation/methodology-2017', 'foundation-pages/methodology-year');
routes.add('foundation-indexes', '/:language/foundation/index/:section', 'foundation-pages/indexes');
routes.add('foundation', '/:language/foundation', 'foundation');

// // Index routes
routes.add('companies', '/:language/companies/:company?', 'companies');
routes.add('mine-sites', '/:language/mine-sites/:mineSite?', 'mine-sites');
routes.add('results', '/:language/results/:section?/:id?', 'results');
routes.add('leading-practices', '/:language/leading-practices', 'leading-practices');
routes.add('library', '/:language/library', 'library');
routes.add('subsidiaries', '/:language/subsidiaries', 'subsidiaries');
routes.add('methodology', '/:language/methodology/:year?', 'methodology');
routes.add('downloads', '/:language/downloads', 'downloads');
routes.add('scoring-framework', '/:language/scoring-framework', 'scoring-framework');
routes.add('corrigenda', '/:language/corrigenda', 'corrigenda');
routes.add('sources', '/:language/sources', 'sources');
routes.add('index', '/:language', 'index');

// 404
routes.add('notFound', '*', '404');

module.exports = routes;
