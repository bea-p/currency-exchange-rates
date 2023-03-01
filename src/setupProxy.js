const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/en/financial-markets/",
    createProxyMiddleware({
      target: "https://www.cnb.cz",
      changeOrigin: true,
    })
  );
};
