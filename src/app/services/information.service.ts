import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformationService {
  info: any = {};
  cargada: boolean = false;
  constructor(public http: Http) {
    this.http.get('assets/data/info.page.json')
      .subscribe( data => {
        this.info = data.json();
        this.cargada = true;
        console.log(data.json());
      });
  }

}
