const fs = require('fs');
const path = require('path');

// Directorio raíz de tu proyecto
const rootDir = './src';

// Función para recopilar rutas recursivamente
function collectRoutes(dir) {
  const files = fs.readdirSync(dir);
  let routes = [];

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      routes = routes.concat(collectRoutes(filePath));
    } else if (stats.isFile() && path.extname(file) === '.js') {
      const relativePath = path.relative(rootDir, filePath).replace(/\\/g, '/');
      routes.push(relativePath);
    }
  });

  return routes;
}

// Ejecuta la función para recopilar rutas
const allRoutes = collectRoutes(rootDir);

// Imprime las rutas
console.log('Rutas encontradas:');
allRoutes.forEach(route => console.log(route));
