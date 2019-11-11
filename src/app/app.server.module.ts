import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './containers/entry/app.component';

import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppServerModule {}
