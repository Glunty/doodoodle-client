export class AppComponent {
  public template = require('./app.tpl.html');
  public controller = AppController;
  public $routeConfig = [
    {path: '/...', name: 'Core', component: 'ddlCore', useAsDefault: true},
    {path: '/login', name: 'Login', component: 'ddlLoginView'}];
}

class AppController {
}
