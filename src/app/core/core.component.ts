export class CoreComponent {
  public template = require('./core.tpl.html');
  public controller = CoreController;
  public $routeConfig = [
    {path: '/', name: 'Home', component: 'ddlHomeView', useAsDefault: true}];
}

class CoreController {
}
