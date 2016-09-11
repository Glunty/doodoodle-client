import {CircleRootComponent} from './circle-root.component';
import {SharedModule} from '../shared/shared.module';
import {routing} from './circle.routing';
import {NgModule} from '@angular/core';

@NgModule({
  declarations: [
    CircleRootComponent
  ],
  imports: [
    SharedModule,
    routing
  ]
})
export class CircleModule {
}
