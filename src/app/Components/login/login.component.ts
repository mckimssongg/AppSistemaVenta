import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import  { Router } from '@angular/router';
import { ILogin } from '../../Interfaces/login';
import { UtilityService } from 'src/app/Reusable/services/utility.service';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formLogin: FormGroup;
  mostrarLoading: boolean = false;
  hide: boolean = true;
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _utilityService: UtilityService,
    private _serviceUser: UsuarioService
    ) {

    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

  }
  
  togglePasswordVisibility(){
    this.hide = !this.hide;
  }

  inciarSesion() {
    this.mostrarLoading = true;

    const request: ILogin = {
      correo: this.formLogin.get('email')?.value,
      clave: this.formLogin.get('password')?.value
    };

    this._serviceUser.iniciarSesion(request).subscribe(
      {
        next: (response) => {
          if (response.status){
            this._utilityService.guardarSesionUsuario(response.value)
            this.router.navigate(['pages']);
          }else{
            this._utilityService.mostrarAlerta("No se encontraron coicidencias", 'Opps!');
          }
        },
        error: (error) => {
          this._utilityService.mostrarAlerta("Hubo un error: " + error.message, 'Opps!');
        },
        complete: () => {
          this.mostrarLoading = false;
          this.formLogin.reset();
        }
      });
  } 
}
