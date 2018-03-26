import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {
  productos: any [] = [];
  cargandoProductos:boolean = true;
  productosFiltrado :any [] = [];
  constructor(private _http: Http) {
    this.cargarProductos();
  }

  public buscarProducto(termino: string){
    if(this.productos.length === 0){
      this.cargarProductos().then(()=>{
        this.filtrar_productos(termino);
      });
    } else{
      this.filtrar_productos(termino);
    }

  }

private filtrar_productos(termino: string){
  this.productosFiltrado = [];
  termino = termino.toLowerCase();
  this.productos.forEach(prod => {
    // corregir busqueda
    if( prod.categoria == termino ){
      this.productosFiltrado.push(prod);
    //  console.log(prod);
    }
    // console.log(prod);
  });
}

  public cargarProducto(id: string){
    return this._http.get(`https://paginaweb-19705.firebaseio.com/productos/${id}.json`);
  }


  public cargarProductos(){

    this.cargandoProductos = true;

    let promesa = new Promise ((resolve, reject ) => {
      this._http.get('https://paginaweb-19705.firebaseio.com/producots_idx.json')
        .subscribe(res => {
          // console.log(res.json());
        //  setTimeout(()=>{
          this.cargandoProductos = false;
          this.productos = res.json();
        //},1500)
        resolve();

      });
    });
    return promesa;

    }

}
