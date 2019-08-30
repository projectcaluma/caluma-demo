import Route from "@ember/routing/route";

export default class DocumentsEditRoute extends Route {
  model(params) {
    return params.uuid;
  }
}
