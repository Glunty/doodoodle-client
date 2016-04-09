import {COMMON_TRANSLATE_MODULE} from './translate.module.ts';
import {Locale} from './locale';

const template = require('./translate-select.tpl.html');

class TranslateSelectComponent implements ng.IDirective {
  public restrict = 'E';
  public replace = true;
  public template = template;
  public scope = {};
  public controller = TodoListController;
  public controllerAs = 'select';
  public bindToController = {
    current: '=',
    langs: '='
  };

  public static factory(): ng.IDirectiveFactory {
    const directive = () => {
      return new TranslateSelectComponent();
    };
    return directive;
  }
}

class TodoListController {
  public current: Locale;
  public langs: Locale[] ;

  /*@ngInject*/
  public constructor(private $translate: ng.translate.ITranslateService) {
  }

  public lang(lang: Locale) {
    this.$translate.use(lang.key);
  }
}

COMMON_TRANSLATE_MODULE.directive('cmnTranslateSelect', TranslateSelectComponent.factory());
