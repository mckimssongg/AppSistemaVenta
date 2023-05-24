import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
// Interfaces
import { IResponseApi } from '../Interfaces/response-api';
import { IVenta } from '../Interfaces/iventa';
import { IDetalleVenta } from '../Interfaces/idetalle-venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  private urlController: string = 'Venta/';
  private urlApi: string = environment.endpoint + this.urlController;

  constructor(private http: HttpClient) { }

  public registrar(request: IVenta): Observable<IResponseApi> {
    return this.http.post<IResponseApi>(this.urlApi + 'Registrar', request);
  }
 
  public historial(
    buscarPor: string,
    numeroVenta: string,
    fechaInicio: string,
    fechaFin: string,
  ): Observable<IResponseApi> {
    return this.http.get<IResponseApi>(
      `${this.urlApi}Historial?buscarPor=${buscarPor}&numeroVenta=${numeroVenta}&fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`
    );
  }

  public reporte(
    fechaInicio: string,
    fechaFin: string,
  ): Observable<IResponseApi> {
    return this.http.get<IResponseApi>(
      `${this.urlApi}Reporte?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`
    );
  }
  
}
