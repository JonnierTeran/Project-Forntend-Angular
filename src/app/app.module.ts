import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PruebaComponent } from './PruebaComponent/Prueba.component';
import { TerminalComponentComponent } from './terminal-component/terminal-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    TerminalComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
