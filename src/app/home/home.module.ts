import {HomeViewComponent} from './home-view.component';
import {SharedModule} from '../shared/shared.module';
import {routing} from './home.routing';
import {NgModule} from '@angular/core';

@NgModule({
  declarations: [
    HomeViewComponent
  ],
  imports: [
    SharedModule,
    routing
  ]
})
export class HomeModule {
}
