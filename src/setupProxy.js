const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://ws-foot-stat.onrender.com',
      changeOrigin: true,
    })
  );
};
