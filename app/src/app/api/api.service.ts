import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  url = 'https://pokeapi.co/api/v2/';

  constructor(private httpClient: HttpClient) {}

  getPokemon(nomePokemon: string): Observable<any> {
    return this.httpClient.get(`${this.url}/pokemon/${nomePokemon}`);
  }
}
