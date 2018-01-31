// routes.js
const nextRoutes = require('next-routes');

const routes = nextRoutes();

// ========================= APP ROUTES =====================
routes.add('index', '/:year', 'index');
routes.add('foundation', '/foundation', 'foundation');
routes.add('foundation-children', '/foundation-children', 'foundation/foundation-children');

module.exports = routes;
