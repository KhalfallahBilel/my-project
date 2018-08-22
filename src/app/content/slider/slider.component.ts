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
     this.slides = [ new SlideList('./assets/bg-slider/1.jpg','Tunisie','Vol à partir de 140€ A/R‎'),
                    new SlideList('./assets/bg-slider/2.jpg','Maldives','Jusqu\'à -40% pour les couples'),
                    new SlideList('./assets/bg-slider/3.jpg','Découvrez la Turquie','-20% pour des voyages en Novembre')
 ];

  }

}
