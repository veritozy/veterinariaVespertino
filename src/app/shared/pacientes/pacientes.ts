import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-pacientes',
  imports: [CommonModule, FormsModule],
  templateUrl: './pacientes.html',
  styleUrl: './pacientes.css',
})
export class Pacientes {

  filtro:string='';

  pacientes=[
    {nombre:"Lucas", especie:"Perro", urgencia:"alta", recuperacion:85},
    {nombre:"Lucky", especie:"Gato", urgencia:"media", recuperacion:40},
    {nombre:"Valentina", especie:"Conejo", urgencia:"baja", recuperacion:10}
  ];

}
