import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  articulos:any;
  
  art={
    codigo:0,
    descripcion:"",
    precio:0
  }

  constructor(private appServicio: AppService) {}

  ngOnInit() {
    this.recuperarTodos();
  }

  recuperarTodos() {
    this.appServicio.recuperarTodos().subscribe((result:any) => this.articulos = result);
  }

  alta() {
    this.appServicio.alta(this.art).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  baja(codigo:number) {
    this.appServicio.baja(codigo).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  modificacion() {
    this.appServicio.modificacion(this.art).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });    
  }
  
  seleccionar(codigo:number) {
    this.appServicio.seleccionar(codigo).subscribe((result:any) => this.art = result[0]);
  }

  hayRegistros() {
    return true;
  } 

}