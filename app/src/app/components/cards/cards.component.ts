import { Component } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { PokemonData } from '../../models/pokemons.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
  providers: [ApiService],
  imports: [CommonModule],
})
export class CardsComponent {
  title = 'app';
  pokemon: PokemonData | undefined;
  exibir = false;
  constructor(private api: ApiService) {}

  getPokemon() {
    this.api.getPokemon('electivire').subscribe((res) => {
      if (res) {
        this.pokemon = res;
        console.log(this.pokemon.sprites.front_default);
        this.exibir = !this.exibir;
      }
    });
  }
}
