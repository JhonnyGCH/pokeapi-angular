import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';
import { Response } from '../../../models/api/Response';
import { Pokemon, PokemonsURL } from '../../../models/entities/pokemon/pokemon';

@Injectable({
  providedIn: 'root',
})
export class HttpPokemonService {
  private serverUrl = environment.serverUrl;
  constructor(private httpClient: HttpClient) {}

  getPokemonByOffsetAndLimit(
    offset: number,
    limit: number
  ): Observable<PokemonsURL> {
    console.log(`${this.serverUrl}?offset=${limit}&limit=${offset}`);
    return this.httpClient.get<PokemonsURL>(
      `${this.serverUrl}?offset=${limit}&limit=${offset}`
    );
  }
  getPokemonByName(
    name: string
  ): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(
      `${this.serverUrl}/${name}`
    );
  }
}
