import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: []
})
export class ItemComponent implements OnInit {
  producto: any;
  codigo: any;
  constructor(private _route: ActivatedRoute,
              private _ps: ProductosService) {
    this._route.params.subscribe(parametros=>{
      this._ps.cargarProducto(parametros['id'])
      .subscribe(res => {
        this.producto = res.json();
        this.codigo = parametros['id'];
        // console.log(this.producto);
      });
    })
   }

  ngOnInit() {
  }

}
