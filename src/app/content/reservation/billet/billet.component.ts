import { Component, OnInit, Input } from '@angular/core';
import { Passager } from '../../../model/passager';
import { Flight } from '../../../model/Flight';

@Component({
  selector: 'app-billet',
  templateUrl: './billet.component.html',
  styleUrls: ['./billet.component.css']
})
export class BilletComponent implements OnInit {

  @Input() vol : Flight;
  @Input() passager : Passager;
  date: String;

  constructor() { }

  ngOnInit()
  {
    this.date = new Date().toLocaleDateString();
  }

}
