const {
  withModuleFederation,
} = require("@module-federation/nextjs-mf");
module.exports = {
  future: { webpack5: true },
  webpack: (config, options) => {
    const { isServer } = options;
    const mfConf = {
      mergeRuntime: true, //experimental
      name: "core",
      library: {
        type: config.output.libraryTarget,
        name: "core",
      },
      filename: "static/runtime/coreRemoteEntry.js",
      remotes: {
      },
      exposes: {
        "./coreComponent": "./components/coreComponent",
      },
    };
    config.cache = false;
    withModuleFederation(config, options, mfConf);
    if (!isServer) {
      config.output.publicPath = "https://mf-nextjs-core.vercel.app/_next/";
    }

    return config;
  },

  webpackDevMiddleware: (config) => {
    return config;
  },
};