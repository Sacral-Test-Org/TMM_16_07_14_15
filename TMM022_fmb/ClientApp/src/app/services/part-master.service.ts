import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PartMasterService {

  private apiUrl = `${environment.apiUrl}/part-master`;

  constructor(private http: HttpClient) { }

  /**
   * Save part information to the backend.
   * @param partInfo - The part information to be saved.
   * @returns Observable<any> - The response from the backend.
   */
  savePartInformation(partInfo: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/save`, partInfo, { headers });
  }

  /**
   * Check if a part already exists in the backend.
   * @param unitId - The unit ID of the part.
   * @param groupId - The group ID of the part.
   * @param lineId - The line ID of the part.
   * @param partNo - The part number.
   * @returns Observable<boolean> - True if the part exists, otherwise false.
   */
  checkPartExists(unitId: string, groupId: string, lineId: string, partNo: string): Observable<boolean> {
    const params = { unitId, groupId, lineId, partNo };
    return this.http.get<boolean>(`${this.apiUrl}/exists`, { params });
  }
}
