import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mascota } from '../../models/mascota';

@Component({
  selector: 'app-detalle-pacientes',
  imports: [],
  templateUrl: './detalle-pacientes.html',
  styleUrl: './detalle-pacientes.css',
})
export class DetallePacientes {

  //Indicar que el componente padre va a enviar información
  //El signo ? indica que la mascota es opcional
  @Input() mascota!:Mascota;

  //Enviar un evento al padre
  //Creamos el evento "notificarAccion"
  @Output() notificarAccion = new EventEmitter<string>();

//Función que se va a activar con un click en el botón del componente hijo
//Definir qué hace el evento notificarAccion
avisarIngreso():void{
  if(this.mascota){
    this.notificarAccion.emit(
      `El paciente ${this.mascota.nombre} ha ingresado a consulta`,
    );
  }
}

}
