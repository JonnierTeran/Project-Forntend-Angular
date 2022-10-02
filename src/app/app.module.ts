import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'


import { AppComponent } from './app.component';
import { PruebaComponent } from './PruebaComponent/Prueba.component';
import { TerminalComponentComponent } from './terminal-component/terminal-component.component';
import { AppRoutingModule } from './app-routing.module';
import { ApiComponent } from './api/api.component';
import { PipeComponentComponent } from './pipe-component/pipe-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { FormulariosComponentComponent } from './formularios-component/formularios-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    TerminalComponentComponent,
    ApiComponent,
    PipeComponentComponent,
    HomeComponentComponent,
    FormulariosComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
