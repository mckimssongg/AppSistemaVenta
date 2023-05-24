import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
// Interfaces
import { IResponseApi } from '../Interfaces/response-api';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  
  private urlController: string = 'DashBoard/';
  private urlApi: string = environment.endpoint + this.urlController;

  constructor(private http: HttpClient) { }
  
  public resumen(): Observable<IResponseApi> {
    return this.http.get<IResponseApi>(this.urlApi + 'Resumen');
  }

}
