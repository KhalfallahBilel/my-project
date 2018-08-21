import { Component, OnInit } from '@angular/core';
import { CardInfList } from '../../model/CardInfList';
import { CardInfListService } from '../../service/card-inf-list.service';

@Component({
  selector: 'app-card-inf',
  templateUrl: './card-inf.component.html',
  styleUrls: ['./card-inf.component.css']
})
export class CardInfComponent implements OnInit {
cards:CardInfList[];
  constructor(private cardInfListService : CardInfListService) { }

  ngOnInit() {
   this.cards=this.cardInfListService.getCardInfList();
  }

}
