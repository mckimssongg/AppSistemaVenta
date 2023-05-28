import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ISesion } from 'src/app/Interfaces/isesion';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(
    private _snackBar: MatSnackBar
  ) { }
  
  mostrarAlerta(msj:string, tipo:string){
    this._snackBar.open(msj,'',{
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: tipo
    });
  };

  guardarSesionUsuario(usuarioSesion:ISesion){
    localStorage.setItem('usuario', JSON.stringify(usuarioSesion));
  };

  obtenerSesionUsuario():ISesion{
    return JSON.parse(localStorage.getItem('usuario')!);
  };

  eliminarSesionUsuario(){
    localStorage.removeItem('usuario');
  };

}
