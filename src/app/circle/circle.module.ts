import {CircleRootComponent} from './circle-root.component';
import {SharedModule} from '../shared/shared.module';
import {routing} from './circle.routing';
import {NgModule} from '@angular/core';
import {CircleListComponent} from './circle-list.component';
import {CircleListItemComponent} from './circle-list-item.component';
import {CircleService} from './circle.service';
import {CircleAddBarComponent} from './circle-add-bar.component';
import {CircleEditModalDirective} from './circle-edit-modal.component';

@NgModule({
  declarations: [
    CircleRootComponent,
    CircleListComponent,
    CircleListItemComponent,
    CircleAddBarComponent,
    CircleEditModalDirective
  ],
  providers: [
    CircleService
  ],
  imports: [
    SharedModule,
    routing
  ]
})
export class CircleModule {
}
