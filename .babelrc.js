var NODE_ENV = process.env.NODE_ENV;
var MODULES = process.env.MODULES;

var modules = MODULES === 'false' || NODE_ENV === 'test' ? 'commonjs' : false;

var config = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: modules,
        forceAllTransforms: NODE_ENV === 'production',
      },
    ],
    '@babel/preset-flow',
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-transform-class-properties',
  ],
};

if (NODE_ENV === 'development') {
  config.plugins = config.plugins.concat([
    // Note: react-transform-hmr is deprecated, consider using React Fast Refresh
  ]);
}

module.exports = config;
