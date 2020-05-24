import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.search.valueChanges.subscribe(value => this.searchEmitter.emit(value))
  }

  search = new FormControl('')
  @Output('search') searchEmitter = new EventEmitter<string>();
}
