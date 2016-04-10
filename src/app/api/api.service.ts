import IHttpService = angular.IHttpService;
import IPromise = Rx.IPromise;
import {IAuthResponse} from './auth/auth-response';
import IQService = angular.IQService;
import IServiceProvider = angular.IServiceProvider;
import {ICircle} from './social/circle';
import ICollectionPromise = restangular.ICollectionPromise;
import {IUser} from './social/user';

export class ApiProvider implements IServiceProvider {

  public baseUrl: string = 'http://localhost:9001';

  /* @ngInject */
  public $get($q: IQService, $http: IHttpService, Restangular: restangular.IService) {
    Restangular.setBaseUrl(this.baseUrl);
    return new ApiService(this.baseUrl, $q, $http, Restangular);
  }
}

export class ApiService {

  public constructor(private baseUrl: string, private $q: IQService, private $http: IHttpService, private rest: restangular.IService) {
  }

  public auth(email: string, password: string): IPromise<IAuthResponse> {
    return this.$http.post(this.baseUrl + '/auth', {email, password}).then((response) => response.data, this.$q.reject);
  }

  public getCircleList(): ICollectionPromise<ICircle> {
    return this.rest.all('group').getList();
  }

  public getCircle(groupId: string): IPromise<ICircle> {
    return this.rest.one('group', groupId).get();
  }

  public removeCircle(groupId: string): IPromise<ICircle> {
    return this.rest.one('group', groupId).remove();
  }

  public addCircle(name: string): IPromise<ICircle> {
    return this.rest.all('group').post({
      name, members: []
    });
  }

  public addUserToCircle(groupId: string, user: IUser): IPromise<any> {
    return this.rest.one('group', groupId).all('addUser').post(user);
  }

  public removeUserToCircle(groupId: string, user: IUser): IPromise<any> {
    return this.rest.one('group', groupId).all('removeUser').post(user);
  }

  public findUser(user: IUser): IPromise<IUser> {
    return this.rest.all('user/find').post(user).then((users: IUser[]) => users.length ? users[0] : false);
  }
}
