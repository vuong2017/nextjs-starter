const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('faqs', '/blog/:slug?')
routes.add('generic', '/:pagename')