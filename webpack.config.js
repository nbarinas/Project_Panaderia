// webpack.config.js
const path = require('path');

module.exports = {
  // Otras configuraciones de Webpack...
  devServer: {
    setupMiddlewares: (middlewares, devServer) => {
      // Middleware antes de la configuración principal
      devServer.app.use((req, res, next) => {
        console.log('Middleware personalizado antes de la configuración principal');
        next();
      });

      // Middleware después de la configuración principal
      middlewares.push((req, res, next) => {
        console.log('Middleware personalizado después de la configuración principal');
        next();
      });

      return middlewares;
    },
    // Otras opciones de devServer...
  },
};
