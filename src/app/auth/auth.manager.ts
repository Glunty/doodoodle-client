import {ApiService} from '../api/api.service';
import {AuthState} from './auth.state';
import IHttpService = angular.IHttpService;
import IStoreService = angular.a0.storage.IStoreService;

export class AuthManager {

  /* @ngInject */
  public constructor(private $rootRouter: any, private ddlApi: ApiService, private ddlAuthState: AuthState) {

  }

  public logIn = (email: string, password: string) => {
    this.ddlApi.auth(email, password).then((response) => {
      this.ddlAuthState.header = response.token;
      this.$rootRouter.navigate(['Core']);
    });
  };

  public logOut = () => {
    this.ddlAuthState.header = null;
    this.$rootRouter.navigate(['Login']);
  };

  /* @ngInject */
  public static run($http: IHttpService, Restangular: restangular.IService, ddlAuthState: AuthState, store: IStoreService) {
    let header = store.get('ddl.authorization.key');
    if (store.get('ddl.authorization.key')) {
      ddlAuthState.header = header;
    }
    ddlAuthState.observeAuth(Rx.Observer.create((header: string) => {
        $http.defaults.headers['Authorization'] = header;
        Restangular.setDefaultHeaders({Authorization: header});
        store.set('ddl.authorization.key', header);
    }));
  }
}
