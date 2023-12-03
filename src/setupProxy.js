const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/summaryOverall',
    createProxyMiddleware({
      target: 'https://ws-foot-stat.onrender.com',
      changeOrigin: true,
    })
  );

  app.use(
    '/summaryHome',
    createProxyMiddleware({
      target: 'https://ws-foot-stat.onrender.com',
      changeOrigin: true,
    })
  );

  app.use(
    '/summaryAway',
    createProxyMiddleware({
      target: 'https://ws-foot-stat.onrender.com',
      changeOrigin: true,
    })
  );

  app.use(
    '/defenseOverall',
    createProxyMiddleware({
      target: 'https://ws-foot-stat.onrender.com',
      changeOrigin: true,
    })
  );

  app.use(
    '/defenseHome',
    createProxyMiddleware({
      target: 'https://ws-foot-stat.onrender.com',
      changeOrigin: true,
    })
  );

  app.use(
    '/defenseAway',
    createProxyMiddleware({
      target: 'https://ws-foot-stat.onrender.com',
      changeOrigin: true,
    })
  );

  app.use(
    '/offensiveOverall',
    createProxyMiddleware({
      target: 'https://ws-foot-stat.onrender.com',
      changeOrigin: true,
    })
  );

  app.use(
    '/offensiveHome',
    createProxyMiddleware({
      target: 'https://ws-foot-stat.onrender.com',
      changeOrigin: true,
    })
  );
  
  app.use(
    '/offensiveAway',
    createProxyMiddleware({
      target: 'https://ws-foot-stat.onrender.com',
      changeOrigin: true,
    })
  );
};
