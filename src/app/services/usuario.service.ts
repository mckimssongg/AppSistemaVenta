import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
// Interfaces
import { IUser } from '../Interfaces/iuser';
import { IResponseApi } from '../Interfaces/response-api';
import { ILogin } from '../Interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlController: string = 'Usuario/';
  private urlApi: string = environment.endpoint + this.urlController;

  constructor(private http: HttpClient) { }

  public iniciarSesion(request: ILogin): Observable<IResponseApi> {
    return this.http.post<IResponseApi>(this.urlApi + 'IniciarSesion', request);
  }

  public listar(): Observable<IResponseApi> {
    return this.http.get<IResponseApi>(this.urlApi + 'Listar');
  }

  
  public guardar(request: IUser): Observable<IResponseApi> {
    return this.http.post<IResponseApi>(this.urlApi + 'Guardar', request);
  }

  public editar(request: IUser): Observable<IResponseApi> {
    return this.http.put<IResponseApi>(this.urlApi + 'Editar', request);
  }
  
  public eliminar(id: number): Observable<IResponseApi> {
    return this.http.delete<IResponseApi>(`${this.urlApi}Eliminar/${id}`);
  }
  
}
