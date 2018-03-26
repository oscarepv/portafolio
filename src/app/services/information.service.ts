import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformationService {
  info: any = {};
  cargada: boolean = false;
  cargadaAbout: boolean = false;
  equipo: any = {};
  constructor(public http: Http) {
    this.http.get('assets/data/info.page.json')
      .subscribe( data => {
        this.info = data.json();
        this.cargada = true;
      });
    this.cargaAbout();
  }
  public cargaAbout() {
    this.http.get('https://paginaweb-19705.firebaseio.com/equipo.json')
      .subscribe( data => {
        this.equipo = data.json();
        this.cargadaAbout = true;
        // console.log(data.json());
      });
  }
  // this.foundBooks = Array.of(this.foundBooks);
}
