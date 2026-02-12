import { Component } from '@angular/core';
import { Hero } from "../../shared/hero/hero";
import { Footer } from "../../shared/footer/footer";
import { Formulario } from "../../shared/formulario/formulario";

@Component({
  selector: 'app-usuarios',
  imports: [Hero, Footer, Formulario],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios {

}
