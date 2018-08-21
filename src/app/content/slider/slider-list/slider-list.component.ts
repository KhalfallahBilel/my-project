import { Component, OnInit, Input } from '@angular/core';
import { SlideList } from '../../../model/SlideList';

@Component({
  selector: 'app-slider-list',
  templateUrl: './slider-list.component.html',
  styleUrls: ['./slider-list.component.css']
})
export class SliderListComponent implements OnInit {
@Input() slide:SlideList;
  constructor() { }

  ngOnInit() {
  }

}
