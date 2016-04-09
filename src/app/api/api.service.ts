import IHttpService = angular.IHttpService;
import IPromise = Rx.IPromise;
import {IAuthResponse} from './auth/auth-response';
import IQService = angular.IQService;
import IServiceProvider = angular.IServiceProvider;

export class ApiProvider implements IServiceProvider {

  public baseUrl: string = '';

  /* @ngInject */
  public $get($q: IQService, $http: IHttpService) {
    return new ApiService(this.baseUrl, $q, $http);
  }
}

export class ApiService {

  public constructor(private baseUrl: string, private $q: IQService, private $http: IHttpService) {
  }

  public auth(email: string, password: string): IPromise<IAuthResponse> {
    return this.$http.post(this.baseUrl + '/auth', {email, password}).then((response) => response.data, this.$q.reject);
  }
}
