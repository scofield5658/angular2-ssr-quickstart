import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { zh_CN, NZ_I18N, NzI18nModule } from 'ng-zorro-antd/i18n';

import { UIRouterModule } from "@uirouter/angular";
import { uiRouterConfigFn } from "./config/router.config";
import stateArray from "./config/states";

import { counterReducer } from './reducers/counter';

import { AppComponent } from "./containers/entry/app.component";
import { HelloComponent } from "./containers/hello/hello.component";
import { AboutComponent } from "./containers/about/about.component";
import { PeopleComponent } from "./containers/people/people.component";
import { PersonComponent } from "./containers/person/person.component";

import { CounterComponent } from './components/counter/counter.component';

const INIT_COMPONENTS = [
  //entry
  AppComponent,
  // containers
  HelloComponent,
  AboutComponent,
  PeopleComponent,
  PersonComponent,
  // components
  CounterComponent,
]

@NgModule({
  declarations: INIT_COMPONENTS,
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    StoreModule.forRoot({ count: counterReducer }),
    NzI18nModule,
    NoopAnimationsModule,
    HttpClientModule,
    UIRouterModule.forRoot({
      states: stateArray,
      useHash: true,
      config: uiRouterConfigFn
    }),
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
