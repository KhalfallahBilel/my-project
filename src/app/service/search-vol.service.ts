import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../model/Flight';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchVolService {

  vols : Observable <Flight[]>;
  

  constructor(private http : HttpClient) { }

  getVols(codeIATA_depart, codeIATA_arrivee) : Observable <Flight[]>{
    return this.http.get<Flight[]>("http://localhost:8080/GoAway/api/vols/from/"+codeIATA_depart+"/to/"+codeIATA_arrivee);
  }
  
  getVolById(id):Observable<Flight>{
    return this.http.get<Flight>("http://localhost:8080/GoAway/api/vols/"+id);
  }

  /*
  getAllVols(): Observable {
    this.http.get<Flight[]>("htttp://localhost:8080//GoAway/api/vols/");    
  } */

}
