import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroProjComponent } from './registro-proj/registro-proj.component';
import { VisualItemComponent } from './visual-item/visual-item.component';
import { RegistroItemComponent } from './registro-item/registro-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroProjComponent,
    VisualItemComponent,
    RegistroItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
