import {HomeViewComponent} from './home-view.component';
import {Module} from '../common/utils/module';
import {APP_MODULE_NAME} from '../app.module';
import {CORE_MODULE} from '../core/core.module';
import {ChildModule} from '../common/utils/child-module';

export const HOME_MODULE: Module = new ChildModule(APP_MODULE_NAME, 'home', [
  CORE_MODULE.name
]);

HOME_MODULE.component('ddlHomeView', new HomeViewComponent());
