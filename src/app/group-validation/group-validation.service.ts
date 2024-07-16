import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupValidationService {

  private baseUrl = 'http://localhost:8080/api/group-validation'; // Adjust the base URL as needed

  constructor(private http: HttpClient) { }

  validateGroup(groupId: string, groupName: string, globalParameter: any): Observable<any> {
    const url = `${this.baseUrl}/validate`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { groupId, groupName, globalParameter };

    return this.http.post<any>(url, body, { headers });
  }
}
