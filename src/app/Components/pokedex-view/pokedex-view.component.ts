import { Component } from '@angular/core';
import { GraphsComponent } from "../graphs/graphs.component";
import { PokedexComponent } from '../pokedex/pokedex.component';

@Component({
  selector: 'app-pokedex-view',
  standalone: true,
  imports: [GraphsComponent, PokedexComponent],
  templateUrl: './pokedex-view.component.html',
  styleUrl: './pokedex-view.component.css'
})
export class PokedexViewComponent {
  pokemonId: number = 0;
  pokemonImagen:string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+ this.pokemonId+ '.png';
  changePokemon() {
    this.pokemonId++;
    this.pokemonImagen  = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+ this.pokemonId+ '.png';
  }
  AnteriorPokemon() {
    this.pokemonId--;
    this.pokemonImagen  = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+ this.pokemonId+ '.png';
  }
}
