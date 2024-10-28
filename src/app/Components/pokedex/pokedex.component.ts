import { Component, Input } from '@angular/core';
import { GraphsComponent } from '../graphs/graphs.component';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [PokedexComponent, GraphsComponent],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent {
  @Input({required: true})imagenUrl: string = "";
}
