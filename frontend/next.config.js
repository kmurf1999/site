require('dotenv').config();

module.exports = {
  /**
   * env variables
   */
  publicRuntimeConfig: {
    apolloURI: process.env.APOLLO_URI,
  },
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    };
    config.module.rules.push(
      {
        test: /\.svg$/,
        loader: 'raw-loader',
      },
      {
        test: /\.(jpg|png)$/,
        use: 'url-loader',
      }
    );

    return config
  }
};
