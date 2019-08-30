import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.mount("ember-caluma", {
    as: "form-builder",
    path: "/form-builder"
  });
  this.route("home");
  this.route("documents", function() {
    this.route("edit", { path: "/:uuid" });
    this.route("new");
  });
});

export default Router;
