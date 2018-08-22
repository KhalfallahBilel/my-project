import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '../../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-search-airport',
  templateUrl: './search-airport.component.html',
  styleUrls: ['./search-airport.component.css']
})
export class SearchAirportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  airportCtrl = new FormControl();
 
  myForm = new FormGroup({
    airport: this.airportCtrl
  });
 
  airports = [
    'Alger (ALG)',
    'Paris (CDG)',
    'Paris (ORY)',
    'Tunis (TUN)',
    'Istanbul (IST)',
    'Dubai (DXB)',
    'Nice (NCE)',
    'Marrakech (RAK)',
    'Kuala Lumpur (KUL)'
  ];
}
