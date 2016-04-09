import {COMMON_MODULE_NAME} from '../common.module';
import {ChildModule} from '../utils/child-module';
import {Module} from '../utils/module';
export const COMMON_TRANSLATE_MODULE_NAME: string = 'translate';

export const COMMON_TRANSLATE_MODULE: Module = new ChildModule(COMMON_MODULE_NAME, COMMON_TRANSLATE_MODULE_NAME, [
]);

import './translate-select.cmp.ts';
