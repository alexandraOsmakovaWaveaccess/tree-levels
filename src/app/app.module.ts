import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTreeModule } from '@angular/material';
import {MatTableModule} from '@angular/material/table'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainPageMenuComponent } from './main-page-menu/main-page-menu.component';
import { MainPageTableComponent } from './main-page-table/main-page-table.component';
import { TestPageComponent } from './test-page/test-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    MainPageComponent,
    MainPageMenuComponent,
    MainPageTableComponent,
    TestPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTreeModule,
    MatIconModule,
    MatTableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
