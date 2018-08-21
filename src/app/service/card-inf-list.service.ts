import { Injectable } from '@angular/core';
import { CardInfList } from '../model/CardInfList';

const MOCKCARD = [
  new CardInfList('','',''),
  new CardInfList('','',''),
  new CardInfList('','',''),
  new CardInfList('','',''),
  new CardInfList('','',''),
  new CardInfList('','','')
];

@Injectable({
  providedIn: 'root'
})
export class CardInfListService {

  constructor() { }
  getCardInfList():CardInfList[]{
    return MOCKCARD;
  }
}
