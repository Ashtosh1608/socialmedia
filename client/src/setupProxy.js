const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://socialmediabackend-e0y8.onrender.com/',
      changeOrigin: true,
    })
  );
};