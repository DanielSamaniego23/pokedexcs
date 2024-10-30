// pokedex-view.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphsComponent } from "../graphs/graphs.component";
import { PokedexComponent } from '../pokedex/pokedex.component';

@Component({
  selector: 'app-pokedex-view',
  standalone: true,
  imports: [CommonModule, GraphsComponent, PokedexComponent],
  templateUrl: './pokedex-view.component.html',
  styleUrl: './pokedex-view.component.css'
})
export class PokedexViewComponent {
  pokemonId: number = 1;
  pokemonImagen: string = '';
  currentPokemon: any = {
    id: 1,
    nombre: 'Bulbasaur',
    tipo: 'Grass',
    vida: 45,
    ataque: 49,
    defensa: 49
  };

  constructor() {
    this.actualizarPokemon();
  }

  actualizarPokemon() {
    this.pokemonImagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemonId}.png`;
  }

  changePokemon() {
    if (this.pokemonId < 898) { // Límite de Pokémon
      this.pokemonId++;
      this.actualizarPokemon();
    }
  }

  AnteriorPokemon() {
    if (this.pokemonId > 1) {
      this.pokemonId--;
      this.actualizarPokemon();
    }
  }
}