import { inject as service } from "@ember/service";
import Component from "@ember/component";
import config from "../config/environment";
import { action } from "@ember/object";

export default class NavbarComponent extends Component {
  @service intl;

  languages = config.languages;
  fallbackLanguage = config.fallbackLanguage;

  @action
  setLanguage(language) {
    if (this.languages.includes(language)) {
      localStorage.setItem("language", language);

      this.intl.setLocale([language, this.fallbackLanguage]);

      window.location.reload(true);
    }
  }
}
