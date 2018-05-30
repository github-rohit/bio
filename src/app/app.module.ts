import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { Index1Component } from './index-1/index-1.component';
import { Index2Component } from './index-2/index-2.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    Index1Component,
    Index2Component
  ],
  imports: [
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
    }])
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
