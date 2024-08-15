import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { PokemonsService } from '../../services/pokemon/pokemon.service';
import { PokemonsService } from '../../core/services/pokemon.service';
import { Pokemon } from '../../models/entities/pokemon/pokemon';
import { BotonPrincipalComponent } from '../boton-principal/boton-principal.component';
import { NavbarComponent } from "../navbar/navbar.component";


@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [CommonModule, BotonPrincipalComponent, NavbarComponent],
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
})
export class PokedexComponent implements OnInit {
  pokemonesData: Pokemon[];
  filteredPokemons : Pokemon[];
  offset = 0;
  constructor(private pokemonService: PokemonsService) {
    this.pokemonesData = [];
    this.filteredPokemons = [];
  }

  async ngOnInit() {
    this.pokemonesData = await this.pokemonService.getPokemons(0);

    console.log(this.pokemonesData);
    // this.loadPokemons();
  }

  searchPokemon(event: any) {
    const input = event.target.value;
    console.log(input);
    const searchTerm = input.toLowerCase();
    this.filteredPokemons = this.pokemonesData.filter(pokemon =>
      pokemon.name.includes(searchTerm)
    );
    if (searchTerm === '') {
      this.ngOnInit();
    }
    if (this.filteredPokemons.length !== 0) {
      this.pokemonesData = this.filteredPokemons;
    }
  }


   async loadPokemons() {
    this.offset += 20;
    this.pokemonesData = await this.pokemonService.getPokemons(this.offset);
  }
}
