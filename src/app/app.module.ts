import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

// rutas

import { app_routintg } from './app.routes';
// services

import {  InformationService } from './services/information.service';
import {  ProductosService } from './services/productos.service';
// compoenntes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { ItemComponent } from './components/item/item.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    app_routintg,
    HttpModule
  ],
  providers: [
    InformationService,
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
