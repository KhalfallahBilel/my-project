import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Passager } from '../model/passager';

@Injectable({
  providedIn: 'root'
})
export class BilletService {

  constructor(private http : HttpClient) { }

  addPassager(passager : Passager){
    this.http.post("http://localhost:8080/GoAway/api/passagers", passager).subscribe();
  }
}
