import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { zh_CN, NZ_I18N, NzI18nModule } from 'ng-zorro-antd/i18n';

import { AppRoutingModule } from './app-routing.module';
import { INIT_COMPONENTS } from './components';

import { reducers } from './reducers';

import { AppComponent } from "./containers/entry/app.component";

@NgModule({
  declarations: INIT_COMPONENTS,
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    StoreModule.forRoot(reducers),
    NzI18nModule,
    NoopAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
