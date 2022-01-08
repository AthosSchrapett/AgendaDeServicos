import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CadastrosClientesComponent } from './cadastros-clientes/cadastros-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CadastrosClientesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
