export class AppComponent {
  public template = require('./app.tpl.html');
  public controller = AppController;
  public $routeConfig = [
    {path: '/login', name: 'Login', component: 'ddlLoginView', useAsDefault: true},
    {path: '/register', name: 'Register', component: 'ddlRegisterView'},
    {path: '/...', name: 'Core', component: 'ddlCore'}];
}

class AppController {
}
