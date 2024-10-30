// graphs.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-graphs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './graphs.component.html',
  styleUrl: './graphs.component.css'
})
export class GraphsComponent {
  idPokemon: string = '#001';
  tipoPokemon: string = 'Agua';
  nombrePokemon: string = 'Squirtle';
  vidaPokemon: number = 100;
  ataquePokemon: number = 100;
  defensaPokemon: number = 100;

  // Si quieres formatear el ID con ceros a la izquierda, puedes crear un getter
  get formattedId(): string {
    // Elimina el # si existe y añade los ceros
    const numericId = this.idPokemon.replace('#', '');
    return '#' + numericId.padStart(3, '0');
  }
}