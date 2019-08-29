import { inject as service } from "@ember/service";
import Route from "@ember/routing/route";

export default class ApplicationRoute extends Route {
  @service intl;

  beforeModel() {
    super.beforeModel(...arguments);

    return this.intl.setLocale("en");
  }
}
