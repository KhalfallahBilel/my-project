import { Injectable } from '@angular/core';
import { CardInfList } from '../model/CardInfList';

const MOCKCARD = [
  new CardInfList('./assets/images/Algerie3.jpg','Algerie','Voyage Organisé'),
  new CardInfList('./assets/images/Nice2.jpg','Nice','Voyage Organisé'),
  new CardInfList('./assets/images/tunisie1.jpg','Tunisie','Voyage Organisé'),
  new CardInfList('./assets/images/Istamboul.jpg','Turquie','Voyage Organisé'),
  new CardInfList('./assets/images/Maroc.jpg','Maroc','Voyage Organisé'),
  new CardInfList('./assets/images/Dubai.jpg','Dubai','Voyage Organisé'),
  new CardInfList('./assets/images/Malaisie.jpg','Malaisie','Voyage Organisé'),
  new CardInfList('./assets/images/Paris.jpg','Paris','Voyage Organisé')
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
