import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GraphsComponent } from "../graphs/graphs.component";
import { PokedexComponent } from '../pokedex/pokedex.component';

interface Pokemon {
  id: string;
  name: string;
  types: Array<{type: {name: string}}>;
  stats: Array<{base_stat: number, stat: {name: string}}>;
}

@Component({
  selector: 'app-pokedex-view',
  standalone: true,
  imports: [CommonModule, HttpClientModule, GraphsComponent, PokedexComponent],
  templateUrl: './pokedex-view.component.html',
  styleUrl: './pokedex-view.component.css'
})
export class PokedexViewComponent implements OnInit {
  pokemonId: number = 1;
  pokemonImagen: string = '';
  currentPokemon: any = {};
  totalPokemons: number = 898; // Puedes ajustar este número según la cantidad de Pokémon que quieras incluir

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPokemon(this.pokemonId);
  }

  fetchPokemon(id: number) {
    this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`).subscribe(
      (data) => {
        this.currentPokemon = {
          id: data.id.toString().padStart(3, '0'),
          nombre: data.name.charAt(0).toUpperCase() + data.name.slice(1),
          tipo: data.types[0].type.name,
          vida: data.stats.find(stat => stat.stat.name === 'hp')?.base_stat || 0,
          ataque: data.stats.find(stat => stat.stat.name === 'attack')?.base_stat || 0,
          defensa: data.stats.find(stat => stat.stat.name === 'defense')?.base_stat || 0
        };
        this.pokemonImagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
      },
      (error) => {
        console.error('Error fetching Pokemon:', error);
      }
    );
  }

  changePokemon() {
    if (this.pokemonId < this.totalPokemons) {
      this.pokemonId++;
      this.fetchPokemon(this.pokemonId);
    }
  }

  AnteriorPokemon() {
    if (this.pokemonId > 1) {
      this.pokemonId--;
      this.fetchPokemon(this.pokemonId);
    }
  }
}