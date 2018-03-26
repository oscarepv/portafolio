import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  termino: string ;
  constructor(private _route: ActivatedRoute,
              private _ps: ProductosService) {
      _route.params.subscribe(parametros =>{
        this.termino = parametros['termino'];
        console.log(this.termino);
        this._ps.buscarProducto(this.termino);
      });
   }

  ngOnInit() {
  }

}
