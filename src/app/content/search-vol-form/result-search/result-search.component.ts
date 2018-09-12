import { Component, OnInit, Input } from '@angular/core';
import { Flight } from '../../../model/Flight';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.css']
})
export class ResultSearchComponent implements OnInit {

  @Input() vol : Flight;

  constructor() { }

  ngOnInit() {
    
  }

}
