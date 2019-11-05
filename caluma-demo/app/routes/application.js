import { inject as service } from "@ember/service";
import Route from "@ember/routing/route";
import config from "../config/environment";

const { languages, fallbackLanguage } = config;
export default class ApplicationRoute extends Route {
  @service intl;

  languages;
  fallbackLanguage;

  getBrowserLanguage() {
    return (navigator.languages || [navigator.language])
      .map(locale => locale)
      .find(lang => languages.includes(lang));
  }

  getLocalStorageLanguage() {
    if (languages.includes(localStorage.getItem("language"))) {
      return localStorage.getItem("language");
    }
  }

  getLanguage() {
    return (
      this.getLocalStorageLanguage() ||
      this.getBrowserLanguage() ||
      fallbackLanguage
    );
  }

  beforeModel() {
    this.intl.setLocale(this.getLanguage());
  }
}
