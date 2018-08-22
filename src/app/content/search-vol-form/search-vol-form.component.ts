import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-vol-form',
  templateUrl: './search-vol-form.component.html',
  styleUrls: ['./search-vol-form.component.css']
})
export class SearchVolFormComponent implements OnInit {
  @Input() back = false;
  constructor() { }

  ngOnInit() {
  }

}
