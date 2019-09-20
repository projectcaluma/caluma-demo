/* eslint-env node */
"use strict";

module.exports = function() {
  const ENV = {
    build: {},
    compress: {
      keep: true,
      compression: ["gzip", "brotli"]
    }
  };

  return ENV;
};
