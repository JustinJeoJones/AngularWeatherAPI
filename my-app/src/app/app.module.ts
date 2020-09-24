import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
