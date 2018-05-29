import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';


import { AppComponent } from './app.component';
import { AnotherAppComponent } from './another-app.component';


@NgModule({
  declarations: [
    AppComponent,
    AnotherAppComponent
  ],
  imports: [
    BrowserModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
