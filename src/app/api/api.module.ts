import {HttpModule} from '@angular/http';
import {NgModule, Optional, SkipSelf} from '@angular/core';
import {ApiService} from './api.service';
import {ExtendedHttp} from '../shared/http/extended-http.service';
import {ApiUrl} from './api.url';

@NgModule({
  imports: [
    HttpModule
  ],
  providers: [
    ApiService, ApiUrl
  ]
})
export class ApiModule {

  public constructor(@Optional() @SkipSelf() parentModule: ApiModule) {
    if (parentModule) {
      throw new Error(
        'ApiModule is already loaded. Import it in the AppModule only');
    }
  }
}
