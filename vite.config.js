const path = require('path');

module.exports = {
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        index: '/index.html',
        success: '/success.html',
        main: '/js/main.js',
        main: '/js/success.js',
      },
    },
  },
  server: {
    port: 8080,
    hot: true,
  },
};

/* const path = require('path');

export default {
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: 'dist',
  },
  server: {
    port: 8080,
    hot: true,
  },
};
 */