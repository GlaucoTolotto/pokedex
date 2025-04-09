import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemons.model';

@Injectable()
export class ApiService {
  url = 'https://pokeapi.co/api/v2/';

  constructor(private httpClient: HttpClient) {}

  getPokemon(nomePokemon: string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(`${this.url}/pokemon/${nomePokemon}`);
  }
}
