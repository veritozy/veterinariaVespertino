import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email:string='';
  password:string='';

  private servicioAuth = inject(AuthService);
  //Router ayuda a establcer una ruta específica después del login
  private router = inject(Router);

  iniciarSesion(){
    this.servicioAuth.login(this.email, this.password).subscribe(success=>{
      if(success){
          alert('Bienvenidos al sistema');
          this.router.navigate(['/usuarios']);
      }else{
        alert('Usuario incorrecto');
      }
    });
    
  }
  cerrarSesion(){
    this.servicioAuth.logout();
  }

}
