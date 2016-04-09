import * as moment from 'moment';
import {CORE_MODULE} from './core.module';
import {Locale} from '../common/translate/locale';

export const LOCALE = {
  FR: 'fr',
  EN: 'en'
};

var enTranslations = require('./i18n.en.json');
var frTranslations = require('./i18n.fr.json');

CORE_MODULE.config(configI18n);
CORE_MODULE.run(runI18n);

function configI18n($translateProvider: ng.translate.ITranslateProvider) {
  $translateProvider.translations(LOCALE.EN, enTranslations);
  $translateProvider.translations(LOCALE.FR, frTranslations);
  $translateProvider
    .useSanitizeValueStrategy('sanitizeParameters')
    .registerAvailableLanguageKeys(_.values<string>(LOCALE), {
      'en_*': LOCALE.EN,
      'fr_*': LOCALE.FR
    })
    .useLocalStorage()
    .fallbackLanguage([LOCALE.EN])
    .useMessageFormatInterpolation()
    .determinePreferredLanguage();
}

interface I18nRoot extends ng.IRootScopeService {
  currentLang: Locale;
  langs: Locale[];
}

function runI18n($rootScope: I18nRoot, $translate: ng.translate.ITranslateService) {
  $rootScope.langs = buildLocales();
  selectLang($rootScope, $translate);
  $rootScope.$on('$translateChangeEnd', () => selectLang($rootScope, $translate));
}

function selectLang($rootScope: I18nRoot, $translate: ng.translate.ITranslateService) {
  const currentKey = $translate.use();
  $rootScope.currentLang = buildLocale(currentKey);
  moment.locale(currentKey);
}

function buildLocales(): Locale[] {
  return _.values(LOCALE).map(buildLocale);
}

function buildLocale(key: string): Locale {
  return {key: key, labelId: `global.locale.${key}`};
}
