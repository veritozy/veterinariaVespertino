import { Component, inject, signal } from '@angular/core';
import { PetService } from '../../services/pet-service';
import { Pet } from '../../models/pet';

@Component({
  selector: 'app-mascotas',
  imports: [],
  templateUrl: './mascotas.html',
  styleUrl: './mascotas.css',
})
export class Mascotas {
  private mascotaServicio = inject(PetService)

  //Es una variable reactiva, que se puede vigilar de manera automática
  //Cada vez que cambie su valor, Angular sabe que tiene que actualizar el html
  mascotas = signal<Pet[]>([]);  

  ngOnInit(){
    this.mascotaServicio.getMascotas().subscribe(datos=>{
      this.mascotas.set(datos.data);
    });
  }
}
