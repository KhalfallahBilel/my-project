import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Flight } from '../../../model/Flight';
import { ReservationComponent } from '../reservation.component';


@Component({
  selector: 'app-passager-form',
  templateUrl: './passager-form.component.html',
  styleUrls: ['./passager-form.component.css']
})
export class PassagerFormComponent implements OnInit {

  @Input() vol : Flight;
  @Input() prix : number;

  passagerForm = this.fb.group({
    nom : ['', Validators.required],
    prenom : ['', Validators.required],
    email: ['',[Validators.required, Validators.pattern( /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
    telephone: ['',[Validators.required, Validators.pattern(/^0\d{9}$/)]],
    age:['',Validators.required]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

  }

}
