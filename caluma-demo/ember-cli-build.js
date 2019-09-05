"use strict";

const EmberApp = require("ember-cli/lib/broccoli/ember-app");

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    "ember-uikit": {
      notification: {
        timeout: 5000,
        group: null,
        pos: "top-center"
      }
    },
    "ember-caluma": {
      includeMirageConfig: false
    }
  });

  return app.toTree();
};
