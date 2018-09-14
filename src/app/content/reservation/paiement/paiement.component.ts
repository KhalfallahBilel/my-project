import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Flight } from '../../../model/Flight';
import { Passager } from '../../../model/passager';
import { FormBuilder, Validators } from '@angular/forms';
import { BilletService } from '../../../service/billet.service';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {

  @Input() vol : Flight;
  @Input() prix : number;
  @Input() passager: Passager;
  step=1;

  @Output() pay = new EventEmitter();

  paiementForm = this.fb.group({
    nom : ['', Validators.required],
    prenom : ['', Validators.required],
    numeroCarte: ['', Validators.required],
    dateexp: ['',[Validators.required, Validators.pattern(/^\d{2}\/\d{2}$/)]],
    crypto:['',[Validators.required, Validators.pattern(/^\d{3}$/)]]
  })

  constructor(private fb: FormBuilder,private billetService :BilletService) { }

  ngOnInit() {
  }
  addPassager(){
      this.billetService.addPassager(this.passager);
      this.step=2;
      document.querySelector('body > app-root > app-reservation > div:nth-child(1)').remove();
  }



}
