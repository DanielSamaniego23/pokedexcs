// graphs.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-graphs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './graphs.component.html',
  styleUrl: './graphs.component.css'
})
export class GraphsComponent {
  @Input() idPokemon: string = '001';
  @Input() nombrePokemon: string = '';
  @Input() tipoPokemon: string = '';
  @Input() vidaPokemon: number = 0;
  @Input() ataquePokemon: number = 0;
  @Input() defensaPokemon: number = 0;
}