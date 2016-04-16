import {ApiService} from './api.service.ts';
import {AuthState, AuthInfo} from './auth.state.ts';
import IStoreService = angular.a0.storage.IStoreService;
import {IUser} from './social/user';

const HEADER_STORAGE_ID = 'ddl.authorization.key';
const USER_STORAGE_ID = 'ddl.authorization.user';

export class AuthManager {

  /* @ngInject */
  public constructor(private $rootRouter: any, private ddlApi: ApiService, private ddlAuthState: AuthState,
                     private store: IStoreService) {

  }

  public logIn = (email: string, password: string) => {
    this.ddlApi.auth(email, password).then((response) => {
      this.ddlAuthState.header = response.token;
      this.getUser().then(() => this.$rootRouter.navigate(['Core']));
    });
  };

  public register = (user: IUser) => {
    this.ddlApi.addUser(user).then(() => this.logIn(user.email, user.password));
  };

  public getUser = () => {
    return this.ddlApi.getUser().then((response) => {
      this.ddlAuthState.user = response;
    });
  };

  public logOut = () => {
    this.ddlAuthState.header = null;
    this.ddlAuthState.user = null;
    this.store.remove(HEADER_STORAGE_ID);
    this.store.remove(USER_STORAGE_ID);
    this.$rootRouter.navigate(['Login']);
  };

  /* @ngInject */
  public static run(ddlApi: ApiService, ddlAuthState: AuthState, store: IStoreService) {
    const state = ddlAuthState;
    const header = store.get(HEADER_STORAGE_ID);
    const user = store.get(USER_STORAGE_ID);

    state.observe(Rx.Observer.create((info: AuthInfo) => {
      if(info.header !== null && info.user === null) {
        ddlApi.rest.setDefaultHeaders({Authorization: info.header});
      }
      if(info.isLoggedIn) {
        store.set(HEADER_STORAGE_ID, info.header);
        store.set(USER_STORAGE_ID, info.user);
      }
    }));

    if(header && user) {
      state.header = header;
      state.user = user;
    }
  }
}
