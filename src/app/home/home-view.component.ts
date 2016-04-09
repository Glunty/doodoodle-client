import IComponentOptions = angular.IComponentOptions;

export class HomeViewComponent implements IComponentOptions {
  public template = require('./home-view.tpl.html');
  public controller = HomeViewController;
}

class HomeViewController {

  public constructor() {
  }
}
