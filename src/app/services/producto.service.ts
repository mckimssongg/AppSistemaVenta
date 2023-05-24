import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
// Interfaces
import { IResponseApi } from '../Interfaces/response-api';
import { IProducto } from '../Interfaces/iproducto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlController: string = 'Producto/';
  private urlApi: string = environment.endpoint + this.urlController;

  constructor(private http: HttpClient) { }

  
  public listar(): Observable<IResponseApi> {
    return this.http.get<IResponseApi>(this.urlApi + 'Listar');
  }
  
  public guardar(request: IProducto): Observable<IResponseApi> {
    return this.http.post<IResponseApi>(this.urlApi + 'Guardar', request);
  }

  public editar(request: IProducto): Observable<IResponseApi> {
    return this.http.put<IResponseApi>(this.urlApi + 'Editar', request);
  }
  
  public eliminar(id: number): Observable<IResponseApi> {
    return this.http.delete<IResponseApi>(`${this.urlApi}Eliminar/${id}`);
  }

}
