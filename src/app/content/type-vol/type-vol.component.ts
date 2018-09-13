import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Flight } from '../../model/Flight';

@Component({
  selector: 'app-type-vol',
  templateUrl: './type-vol.component.html',
  styleUrls: ['./type-vol.component.css']
  
})
export class TypeVolComponent implements OnInit {

  @Output() onVolsLoaded : EventEmitter<Flight[]> = new EventEmitter<Flight[]>();

  constructor() { }

  ngOnInit() {
  }

  passToParent(vols){
      this.onVolsLoaded.emit(vols);
  }

}
