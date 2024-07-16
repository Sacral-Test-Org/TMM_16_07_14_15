import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LineValidationService {

  private apiUrl = `${environment.apiUrl}/line-validation`;

  constructor(private http: HttpClient) { }

  validateLine(lineId: string, lineDescription: string, unitId: string, groupId: string, globalParameter: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = {
      lineId,
      lineDescription,
      unitId,
      groupId,
      globalParameter
    };

    return this.http.post<any>(`${this.apiUrl}/validate`, body, { headers });
  }
}
