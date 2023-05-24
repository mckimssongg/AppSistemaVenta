import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
// Interfaces
import { IResponseApi } from '../Interfaces/response-api';
import { IMenu } from '../Interfaces/imenu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private urlController: string = 'Menu/';
  private urlApi: string = environment.endpoint + this.urlController;

  constructor(private http: HttpClient) { }
  
  public listar(IdUsuario: number): Observable<IResponseApi> {
    return this.http.get<IResponseApi>(`${this.urlApi}Listar?IdUsuario=${IdUsuario}`);
  }
  
}
