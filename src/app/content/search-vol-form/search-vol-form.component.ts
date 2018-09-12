import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SearchVolService} from '../../service/search-vol.service'
import { Flight } from '../../model/Flight';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-vol-form',
  templateUrl: './search-vol-form.component.html',
  styleUrls: ['./search-vol-form.component.css']
})
export class SearchVolFormComponent implements OnInit {
  @Input() back = false;

  volForm = this.fb.group({
    depart : [''],
    arrivee: [''],
    dateAller: [''],
    dateRetour: [''],
    classe:[''],
    typePassager: this.fb.group({
      adulte: [''],
      enfant: [''],
      bebe: ['']
    }),
    

  })

  vols : Flight[];

  get depart() {
    return this.volForm.get('depart');
  }
  get arrivee() {
    return this.volForm.get('arrivee');
  }
  

  constructor(private searchVolService : SearchVolService, private fb: FormBuilder) { }

  ngOnInit() {
    //this.searchVolService.getVolById;
    // this.searchVolService.getAllVols();
  }

  onSubmit(){
 
  this.searchVolService
      .getVols(this.volForm.get('depart').value, this.volForm.get('arrivee').value)
      .subscribe(value =>{
        this.vols = value["data"];
        console.log(this.vols);
      } );

  }

  

}

