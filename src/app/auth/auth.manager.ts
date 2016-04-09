import {ApiService} from '../api/api.service';
import {AuthState} from './auth.state';
import IHttpService = angular.IHttpService;

export class AuthManager {

  /* @ngInject */
  public constructor(private ddlApi: ApiService, private ddlAuthState: AuthState) {

  }

  /* @ngInject */
  public static run($rootRouter: any, $http: IHttpService, ddlAuthState: AuthState) {
    ddlAuthState.observeAuth(Rx.Observer.create((auth: string) => {
      if (auth) {
        $http.defaults.headers['Authorization'] = auth;
        $rootRouter.navigate(['Core']);
      }
    }));
  }

  public logIn = (email: string, password: string) => {
    this.ddlApi.auth(email, password).then((response) => {
      this.ddlAuthState.auth = response.token;
    });
  };
}
