import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
@Component({
  selector: 'app-graphs',
  standalone: true,
  imports: [NgIf],
  templateUrl: './graphs.component.html',
  styleUrl: './graphs.component.css'
})
export class GraphsComponent {
  idPokemon: string = '#001';  // Ejemplo de atributos
  tipoPokemon: string= 'Agua';
  nombrePokemon: string = 'XD';
  vidaPokemon: number = 100;
  ataquePokemon: number = 100;
  defensaPokemon: number = 100;

}
