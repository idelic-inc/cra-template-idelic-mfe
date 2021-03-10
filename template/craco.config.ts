module.exports = {
  webpack: {
    configure: (config) => {
      config.optimization.runtimeChunk = false;
      config.optimization.splitChunks = {
        cacheGroups: {
          default: false
        }
      };

      config.output.filename = 'static/js/[name].[hash].js';

      config.plugins[5].options.filename = 'static/css/[name].css';
      config.plugins[5].options.moduleFilename = () => 'static/css/main.css';
      return config;
    }
  },
  devServer: (config) => {
    config.headers = {
      'Access-Control-Allow-Origin': 'http://localhost:3001',
      'Access-Control-Allow-Credentials': 'true'
    };
    return config;
  }
};
