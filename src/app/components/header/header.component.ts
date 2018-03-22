import { Component, OnInit } from '@angular/core';
import { InformationService } from '../../services/information.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor( public information: InformationService) {

  }

  ngOnInit() {
  }

}
