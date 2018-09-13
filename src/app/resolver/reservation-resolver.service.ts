import { Injectable } from "@angular/core";
import {Router, ActivatedRouteSnapshot} from "@angular/router";
import { Observable, of } from "rxjs";
import { catchError, first } from "rxjs/operators";
import { SearchVolService } from "../service/search-vol.service";

@Injectable({
  providedIn: "root"
})
export class ReservationResolverService {
  constructor(private searchVol: SearchVolService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    let id = route.paramMap.get("id");

    return this.searchVol.getVolById(id).pipe(
      first(),
      catchError(error => {
        this.router.navigateByUrl("/");
        return of(null);
      })
    );
  }
}