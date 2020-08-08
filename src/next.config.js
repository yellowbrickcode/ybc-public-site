module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./lib/generateSitemap');
    }
    return config;
  },
};
