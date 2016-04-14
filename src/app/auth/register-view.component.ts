export class RegisterViewComponent {
  public template = require('./register-view.tpl.html');
  public controller = RegisterViewController;
}

class RegisterViewController {
  public constructor() {
  }

  public $onInit() {
    console.log('Hello');
  }
}
