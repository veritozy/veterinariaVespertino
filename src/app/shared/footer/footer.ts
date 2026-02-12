import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  anio: number = new Date().getFullYear();

  logoUrl:string="/images/huella.png";

  enlaces = [
    {nombre:'Home', link:'#'},
    {nombre:'Acerca', link:'#'},
    {nombre:'Mascotas', link:'#'},
    {nombre:'Contacto', link:'#'},
    {nombre:'Registro', link:'#'}
  ];

}
