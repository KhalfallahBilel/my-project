import { Component, OnInit } from '@angular/core';
import { Flight } from '../model/Flight';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  vols : Flight[];

  constructor() { }

  ngOnInit() {
  }

/*   displayVols(vols){
    console.log(vols);
  }
 */

 retrieve(vols) {
   this.vols = vols;
 }
}
