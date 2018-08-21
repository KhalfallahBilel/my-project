import { Component, OnInit } from '@angular/core';
import { SlideList } from '../../model/SlideList';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
slides : SlideList[];
  constructor() { }

  ngOnInit() {
     this.slides = [new SlideList('./assets/bg-slider/1.jpg','Egypte','Reserver votre place‎'),
   new SlideList('./assets/bg-slider/2.jpg','Maldives','Jusqu\'à -40% pour les couples'),
   new SlideList('./assets/bg-slider/3.jpg','ABCD','abcdef')
 ];

  }

}
