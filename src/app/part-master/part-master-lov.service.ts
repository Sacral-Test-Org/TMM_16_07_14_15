import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartMasterLovService {

  private baseUrl = 'http://localhost:8080/api/part-master'; // Adjust the base URL as needed

  constructor(private http: HttpClient) { }

  /**
   * Fetch the appropriate LOV based on the global parameter.
   * @param globalParameter The parameter to filter the LOV.
   * @returns Observable containing the list of values for part number selection.
   */
  getPartNumberLov(globalParameter: string): Observable<any> {
    const url = `${this.baseUrl}/lov?param=${globalParameter}`;
    return this.http.get<any>(url);
  }
}
