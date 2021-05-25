module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@assets': './src/assets',
            '@configuration': './src/configuration',
            '@core': './src/core',
            '@env': 'env.js',
            '@views': './src/views'
          }
        }
      ]
    ]
  };
};
