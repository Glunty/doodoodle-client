import {Module} from '../common/module/module';
import {APP_MODULE_NAME} from '../app.module';
import {CORE_MODULE} from '../core/core.module';
import {ChildModule} from '../common/module/child-module';
import {CircleListComponent} from './circle-list.component.ts';
import {CircleListManager} from './circle-list.manager';
import {CirclePanelComponent} from './circle-panel.component';
import {CircleEditModalDirective} from './circle-edit-modal.directive';
import {CircleManager} from './circle.manager';

export const SOCIAL_MODULE: Module = new ChildModule(APP_MODULE_NAME, 'social', [
  CORE_MODULE.name
]);

SOCIAL_MODULE.component('ddlCirclesView', new CircleListComponent());
SOCIAL_MODULE.directive('ddlCircleEditModal', CircleEditModalDirective.factory());
SOCIAL_MODULE.component('ddlCirclePanel', new CirclePanelComponent());

SOCIAL_MODULE.factory('ddlCircleManagerFactory', CircleManager.factory);
SOCIAL_MODULE.factory('ddlCircleListManagerFactory', CircleListManager.factory);
