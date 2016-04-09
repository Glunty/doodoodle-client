import {ApiService} from '../api/api.service';
import {AuthState} from './auth.state';
import IHttpService = angular.IHttpService;
import IStoreService = angular.a0.storage.IStoreService;

export class AuthManager {

  /* @ngInject */
  public constructor(private $rootRouter: any, private ddlApi: ApiService, private ddlAuthState: AuthState) {

  }

  /* @ngInject */
  public static run($http: IHttpService, ddlAuthState: AuthState, store: IStoreService) {
    ddlAuthState.observeAuth(Rx.Observer.create((auth: string) => {
      if (auth) {
        $http.defaults.headers['Authorization'] = auth;
        store.set('ddl.authorization.key', auth);
      }
    }));

    let auth = store.get('ddl.authorization.key');
    if (store.get('ddl.authorization.key')) {
      ddlAuthState.auth = auth;
    }
  }

  public logIn = (email: string, password: string) => {
    this.ddlApi.auth(email, password).then((response) => {
      this.ddlAuthState.auth = response.token;
      this.$rootRouter.navigate(['Core']);
    });
  };
}
