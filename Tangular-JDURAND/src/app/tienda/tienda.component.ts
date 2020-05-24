import { Component, OnInit } from '@angular/core';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  handleSearch(value:string){
    console.log(value)
  }

  constructor() { }

  ngOnInit(): void {
  }


}
