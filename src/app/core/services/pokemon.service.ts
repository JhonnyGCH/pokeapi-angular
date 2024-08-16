import { Injectable } from '@angular/core';
import { HttpPokemonService } from './http/http-pokemon.service';
import { log } from 'console';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  constructor(private httpPokemonService: HttpPokemonService) {}

  async getPokemons(offset:number) {
    const response = await lastValueFrom(
      this.httpPokemonService.getPokemonByOffsetAndLimit(offset,0)
    );3

    const pokemonPromises = response.results.map(async (pokemon) => {
      return await lastValueFrom(
        this.httpPokemonService.getPokemonByName(pokemon.name)
      );
    });

    const pokemonData = await Promise.all(pokemonPromises);

    return pokemonData;
  }
  // getPokemon(name: string) {
  //   const response = this.httpPokemonService.getPokemonByName(name);
  //   return response;
  // }
}
