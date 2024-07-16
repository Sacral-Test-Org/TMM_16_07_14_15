import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartMasterValidationService {

  private validationUrl = 'http://localhost:8080/api/validatePartNumber'; // URL to the backend validation endpoint

  constructor(private http: HttpClient) { }

  /**
   * Validate the part number by sending an HTTP request to the backend.
   * @param partNumber The part number to be validated.
   * @param globalParameter Additional global parameter for validation.
   * @returns An Observable with the validation result.
   */
  validatePartNumber(partNumber: string, globalParameter: any): Observable<any> {
    const payload = {
      partNumber: partNumber,
      globalParameter: globalParameter
    };
    return this.http.post<any>(this.validationUrl, payload);
  }
}
