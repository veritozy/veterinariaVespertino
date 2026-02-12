import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

  //La información qeu recibe del componente padre
  @Input() titulo!:string;
  @Input() textoBoton!:string;
  @Input() imagen!:string;

}
