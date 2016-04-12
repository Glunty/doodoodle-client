
import 'angular';
import 'angular-animate';
import 'angular-cookies';
import 'angular-messages';
import 'angular-sanitize';
import 'angular-translate';
import 'immutable';
import 'rx-lite';
import 'node_modules/angular-translate-storage-local/angular-translate-storage-local.js';
import 'node_modules/angular-translate-storage-cookie/angular-translate-storage-cookie.js';
import 'node_modules/angular-translate-interpolation-messageformat/angular-translate-interpolation-messageformat.js';
// Fix
import 'imports?MessageFormat=node_modules/messageformat/messageformat.js!node_modules/messageformat/locale/fr.js';
import 'node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js';
import 'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js';
import 'node_modules/angular-ui-select/select.js';
import 'jquery';
import 'lodash';
import 'moment';
import 'restangular';
import 'node_modules/@angular/router/angular1/angular_1_router.js';
import 'node_modules/angular-storage/dist/angular-storage.js';
import 'node_modules/ng-focus-if/focusIf.js';
import 'core-js';

import {APP_MODULE} from './app/app.module';

angular.element(document).ready(function() {
    angular.bootstrap(document, [APP_MODULE.name], {strictDi: true});
});

