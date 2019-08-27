import Application from "@ember/application";
import Resolver from "./resolver";
import loadInitializers from "ember-load-initializers";
import config from "./config/environment";

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,

  engines: {
    emberCaluma: {
      dependencies: {
        services: [
          "apollo", // ember-apollo-client for graphql
          "notification", // ember-uikit for notifications
          "router", // ember router for navigation
          "intl", // ember-intl for i18n
          "caluma-options", // service to configure ember-caluma
          "validator" // service for generic regex validation
        ]
      }
    }
  }
});

loadInitializers(App, config.modulePrefix);

export default App;
