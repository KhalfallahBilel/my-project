import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flight } from '../../model/Flight';
import { Passager } from '../../model/passager';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  step=1;
  vol : Flight;
  prix = 0;

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.data);
      this.route.data.subscribe(v => {
        this.vol = v.vol['data'];
      })
  }
  
  choixPrix(prix){
    this.prix=prix; 
    console.log(prix);
  }
  
  showVol(){
    console.log(this.vol);
    this.step=2;
  }


  

}
