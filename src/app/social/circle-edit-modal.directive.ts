import IModalService = angular.ui.bootstrap.IModalService;
import * as $ from 'jquery';
import {ApiService} from '../api/api.service';
import {IUser} from '../api/social/user';
import {CircleState} from './circle.state';
import {CircleManager, CircleManagerFactory} from './circle.manager';
import ITimeoutService = angular.ITimeoutService;

export class CircleEditModalDirective implements ng.IDirective {
  public restrict: string = 'A';
  public scope: any = {
    state: '<ddlCircleEditModal'
  };

  public constructor(private $uibModal: IModalService) {
  }

  public link = (scope: any, elem: ng.IAugmentedJQuery) => {
    $(elem).click(() => this.openCircleEditModal(scope.state));
  };

  private openCircleEditModal = (state: CircleState) => {
    return this.$uibModal.open({
      bindToController: true,
      controller: CircleEditModalController,
      controllerAs: '$ctrl',
      template: require('./circle-edit-modal.tpl.html'),
      resolve: {
        state: () => state
      }
    });
  };

  /* @ngInject */
  public static directive($uibModal: IModalService, $timeout: ITimeoutService) {
    return new CircleEditModalDirective($uibModal);
  }

  public static factory() {
    return this.directive;
  }
}

class CircleEditModalController {

  public form: any;
  public email: string;
  public user: IUser;
  private manager: CircleManager;

  /* @ngInject */
  public constructor(private $scope: any, state: CircleState, private ddlApi: ApiService, ddlCircleManagerFactory: CircleManagerFactory) {
    this.manager = ddlCircleManagerFactory(state);
  }

  public addUser() {
    this.manager.addUser(this.user).then(() => this.$scope.$close());
  }

  public checkValidity() {
    this.form.$setValidity('email', true);
    if(this.form.$valid) {
      this.form.$setValidity('email', false);
      this.ddlApi.findUser({email: this.email}).then((result: any) => {
        if(result) {
          this.user = result;
          this.form.$setValidity('email', true);
        } else {
          this.form.$setValidity('email', false);
        }
      });
    }
  }
}
