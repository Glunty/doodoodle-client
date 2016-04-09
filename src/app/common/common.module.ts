import {Module} from './utils/module';
import {COMMON_TRANSLATE_MODULE} from './translate/translate.module';

export const COMMON_MODULE_NAME: string = 'common';

export const COMMON_MODULE: Module = new Module(COMMON_MODULE_NAME, [
  COMMON_TRANSLATE_MODULE.name
]);
