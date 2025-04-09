import { Component } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { Pokemon } from '../../models/pokemons.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
  providers: [ApiService], 
  standalone: false
})
export class CardsComponent {
  title = 'app';
  pokemon: Pokemon | undefined;
  exibir = false;
  constructor(private api: ApiService) {}

  getPokemon() {
    this.api.getPokemon('ditto').subscribe((res) => {
      if (res) {
        this.pokemon = res;
        this.exibir = !this.exibir;
      }
    });
  }
}
