import { Component, OnInit } from '@angular/core';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { CatalogoComponent } from './catalogo/catalogo.component';

@Component({
  selector: 'tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
