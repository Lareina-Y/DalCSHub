// Author: Vrund Patel

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080', // https://csci4177-dalcshub-api.onrender.com/
      changeOrigin: true,
    })
  );
};
