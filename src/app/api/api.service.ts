import IHttpService = angular.IHttpService;
import IPromise = Rx.IPromise;
import {IAuthResponse} from './auth/auth-response';
import IQService = angular.IQService;
import IServiceProvider = angular.IServiceProvider;
import {ICircle} from './social/circle';
import ICollectionPromise = restangular.ICollectionPromise;
import {IUser} from './social/user';

const AUTH_PATH = 'auth';
const USER_PATH = 'user';
const GROUP_PATH = 'group';

export class ApiProvider implements IServiceProvider {

  public baseUrl: string = 'http://localhost:9001';

  /* @ngInject */
  public $get($q: IQService, Restangular: restangular.IService) {
    let rest = Restangular.withConfig((RestangularConfigurer: restangular.IService) => {
      RestangularConfigurer.setBaseUrl(this.baseUrl);
    });
    return new ApiService($q, rest);
  }
}

export class ApiService {

  public constructor(private $q: IQService, public rest: restangular.IService) {
  }

  public auth(email: string, password: string): IPromise<IAuthResponse> {
    return this.rest.all(AUTH_PATH).post({email, password});
  }

  public getUser(): IPromise<IUser> {
    return this.rest.one(USER_PATH, null).get();
  }

  public addUser(email: string, password: string): IPromise<IUser> {
    return this.rest.all(USER_PATH).post({email, password});
  }

  public getCircleList(): ICollectionPromise<ICircle> {
    return this.rest.all(GROUP_PATH).getList();
  }

  public getCircle(groupId: string): IPromise<ICircle> {
    return this.rest.one(GROUP_PATH, groupId).get();
  }

  public removeCircle(groupId: string): IPromise<ICircle> {
    return this.rest.one(GROUP_PATH, groupId).remove();
  }

  public addCircle(name: string): IPromise<ICircle> {
    return this.rest.all(GROUP_PATH).post({
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
