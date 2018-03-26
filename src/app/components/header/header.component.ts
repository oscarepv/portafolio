import { Component, OnInit } from '@angular/core';
import { InformationService } from '../../services/information.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor( public information: InformationService, public _router: Router) {

  }
  buscarProducto(termino: string){
    this._router.navigate(['buscar',termino]);
  }
  ngOnInit() {
  }

}
