import { Component, OnInit, Input } from '@angular/core';
import { CardInfList } from '../../../model/CardInfList';

@Component({
  selector: 'app-card-inf-list',
  templateUrl: './card-inf-list.component.html',
  styleUrls: ['./card-inf-list.component.css']
})
export class CardInfListComponent implements OnInit {
@Input () card:CardInfList
  constructor() { }

  ngOnInit() {
  }

}
