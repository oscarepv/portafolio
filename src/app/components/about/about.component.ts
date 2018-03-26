import { Component, OnInit } from '@angular/core';
import { InformationService } from '../../services/information.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {
  constructor( public information: InformationService) {
  }

  ngOnInit() {
  }

}
