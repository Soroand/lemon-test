const path = require('path')

module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          alias: {
            atoms: path.resolve(__dirname, './src/components/atoms'),
            molecules: path.resolve(__dirname, './src/components/molecules'),
            organisms: path.resolve(__dirname, './src/components/organisms'),
            templates: path.resolve(__dirname, './src/components/templates'),
            views: path.resolve(__dirname, './src/views'),
            context: path.resolve(__dirname, './src/context'),
            modules: path.resolve(__dirname, './src/modules'),
            repositories: path.resolve(__dirname, './src/repositories'),
            services: path.resolve(__dirname, './src/services'),
            assets: path.resolve(__dirname, './src/assets'),
            navigation: path.resolve(__dirname, './src/navigation'),
            I18n: path.resolve(__dirname, './src/I18n'),
            store: path.resolve(__dirname, './src/store'),
          },
        },
      ],
    ],
  }
}
