const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#FF7F3F','@input-placeholder-color': '#423F3E' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};