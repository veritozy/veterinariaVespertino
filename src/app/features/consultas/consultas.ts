import { Component } from '@angular/core';
import { Mascota } from '../../models/mascota';
import { DetallePacientes } from "../../shared/detalle-pacientes/detalle-pacientes";

@Component({
  selector: 'app-consultas',
  imports: [DetallePacientes],
  templateUrl: './consultas.html',
  styleUrl: './consultas.css',
})
export class Consultas {

   mascotas=[
    {id:1, nombre:"Lucas", especie:"Perro", historial:"Vacunas al día"},
    {id:2, nombre:"Lucky", especie:"Gato", historial:"Requiere desparacitación"},
    {id:3, nombre:"Valentina", especie:"Conejo", historial:"Requiere rehabilitación"}
  ];

  mascotaSeleccionada: Mascota | null = null;

  mensajeAviso:string='';

  //Función que se ejecuta cuando el usuario de click en "Ver Ficha"
  verDetalles(mascota:Mascota){
    this.mascotaSeleccionada=mascota;
  }

  //Función encargada de gestionar el evento personalizado que viene del hijo detalle-pacientes
  procesarAviso(mensaje:string){
    this.mensajeAviso=mensaje;
  }
}
