import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
// Interfaces
import { IResponseApi } from '../Interfaces/response-api';
import { ICategoria } from '../Interfaces/icategoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private urlController: string = 'Categoria/';
  private urlApi: string = environment.endpoint + this.urlController;

  constructor(private http: HttpClient) { }
  
  public listar(): Observable<IResponseApi> {
    return this.http.get<IResponseApi>(this.urlApi + 'Listar');
  }
  
}
