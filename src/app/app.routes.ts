import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Pagina404 } from './shared/pagina-404/pagina-404';
import { Servicios } from './shared/servicios/servicios';
import { Consultas } from './features/consultas/consultas';
import { Mascotas } from './shared/mascotas/mascotas';
import { Usuarios } from './features/usuarios/usuarios';
import { FormCuenta } from './shared/form-cuenta/form-cuenta';
import { Login } from './shared/login/login';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    //Ruta inicial
    {path:'', component:Home},
    //Rutas de navegación
    {path:'acerca', component:Servicios},
    {path:'consultas', component:Consultas},
    {path:'mascotas', component:Mascotas},
    {path:'usuarios', component:Usuarios, canActivate:[authGuard]},
    {path:'cuenta', component:FormCuenta},
    {path:'login', component:Login},


    //FINAL
    //Redirección por si el usuario intenta acceder a una ruta que no existe
    {path:'**', component:Pagina404}
];
