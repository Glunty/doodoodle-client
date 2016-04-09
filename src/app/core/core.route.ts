import {CORE_MODULE} from './core.module';

const contentTpl = require('../layout/content.tpl.html');

CORE_MODULE.config(configRoute);

function configRoute($stateProvider: ng.ui.IStateProvider) {
  $stateProvider.state({
    name: 'main',
    url: '',
    template: contentTpl
  });
}
