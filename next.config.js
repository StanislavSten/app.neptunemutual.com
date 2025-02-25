const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const { i18n } = require("./i18n.config");
const http = require("./http");

module.exports = (phase, { _c }) => {
  return {
    reactStrictMode: true,
    experimental: {
      outputStandalone: true,
    },
    headers: async () => {
      if (phase === PHASE_DEVELOPMENT_SERVER) {
        return http.headers.development;
      }

      return http.headers.production;
    },
    redirects: async () => {
      return http.redirects;
    },
    i18n,
    webpack: (config) => {
      config.module.rules.push({
        test: /\.po/,
        use: ["@lingui/loader"],
      });

      return config;
    },
  };
};
