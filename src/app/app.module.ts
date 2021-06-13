import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataTableModule } from 'angular-4-data-table/src/index';

import { Dashboard } from './dashboard/dashboard';
import { RemoteService } from './dashboard/dashboard-service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [ BrowserModule, CommonModule, FormsModule, DataTableModule, HttpModule ],
  declarations: [ AppComponent, Dashboard ],
  providers: [ RemoteService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
