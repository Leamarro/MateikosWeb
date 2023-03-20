import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavbarComponent} from '../navbar/navbar.component'
import { CarouselComponent } from 'src/carousel/carousel.component';
import { TarjetasComponent } from 'src/tarjetas/tarjetas.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TarjetaCategoriaComponent } from 'src/tarjeta-categoria/tarjeta-categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    TarjetasComponent,
    TarjetaCategoriaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
