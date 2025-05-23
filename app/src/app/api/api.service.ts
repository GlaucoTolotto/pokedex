import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonData } from '../models/pokemons.model';
import { AllPokemon } from '../models/allPokemons.model';

@Injectable()
export class ApiService {
  private url = 'https://pokeapi.co/api/v2/';

  constructor(private httpClient: HttpClient) {}

  getAllPokemons(request?: string): Observable<AllPokemon> {
    return this.httpClient.get<AllPokemon>(
      request
        ? `${this.url}/pokemon/${request}`
        : `${this.url}/pokemon?limit=150`
    );
  }

  getPokemonByName(nomePokemon: string): Observable<PokemonData> {
    return this.httpClient.get<PokemonData>(
      `${this.url}/pokemon/${nomePokemon}`
    );
  }
}
