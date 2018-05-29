import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { Index1Component } from './index-1/index-1.component';
import { Index2Component } from './index-2/index-2.component';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    Index1Component,
    Index2Component
  ],
  imports: [
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([{
      path: '',
      component: IndexComponent
    }, {
      path: 'index',
      component: IndexComponent
    }, {
      path: 'indexv1',
      component: Index1Component
    }, {
      path: 'indexv2',
      component: Index2Component
    }])
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
