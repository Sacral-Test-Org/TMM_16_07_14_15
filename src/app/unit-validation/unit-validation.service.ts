import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UnitValidationService {

  private apiUrl = `${environment.apiUrl}/unit-validation`;

  constructor(private http: HttpClient) { }

  validateUnit(unitId: string, unitName: string, globalParameter: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = {
      unitId: unitId,
      unitName: unitName,
      globalParameter: globalParameter
    };

    return this.http.post<any>(`${this.apiUrl}/validate`, body, { headers: headers });
  }
}
