import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LoginModule} from './login/login.module';
import {CoreModule} from './core/core.module';
import {ApiModule} from './api/api.module';
import {HomeModule} from './home/home.module';
import {routing} from './app.routing';
import {CircleModule} from './circle/circle.module';
import {MenuComponent} from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent, MenuComponent
  ],
  imports: [
    BrowserModule,
    routing,
    CoreModule,
    LoginModule,
    HomeModule,
    CircleModule,
    ApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
