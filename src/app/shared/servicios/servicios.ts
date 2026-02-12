import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  imports: [],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios {

  subtitulo:string="Cuidamos de los que más quieres con servicios de alta calidad";

  //Variable para seleccionar un servicio
  serviciosSeleccionado: string="ninguno";

 

  servicios = [
    {
      id:1,
      nombre:"Consulta General",
      descripcion: "Evaluación completa de salud, peso y signos vitales",
      imagen:"https://purina.com.ec/sites/default/files/2022-10/purina-consulta-veterinaria-para-mascotas-lo-que-debes-saber.jpg",
      activo:true
    },
     {
      id:2,
      nombre:"Estética",
      descripcion: "La imagen de tu mascota en las mejores manos",
      imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIT82FAZwyRTOKi_Fq15mwrxfgsVOf3yIlDw&s",
      activo:true
    },
     {
      id:3,
      nombre:"Cirugía",
      descripcion: "Los mejores profesionales al cuidado de tu mascota",
      imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQucllF97MLPaXRHd4qpzzoDYR1AWJxXiQiRQ&s",
      activo:false
    },
  ];

   //Arreglo para filtrar los servicios
  serviciosFiltrados = this.servicios;

  //Función para seleccionar el servicio
  seleccionar(nombre:string){
    this.serviciosSeleccionado=nombre;
  }

  //Función para buscar servicios
  busqueda(event: Event){
    //extraer el valor del input
    const valorBuscar = (event.target as HTMLInputElement).value;

    //cambiar el subtitulo
    this.subtitulo=`Resutados para: ${valorBuscar}`;

    //filtrar el arreglo original de servicios
    this.serviciosFiltrados=this.servicios.filter(s =>
      s.nombre.toLowerCase().includes(valorBuscar.toLowerCase())
    );
  }

}
