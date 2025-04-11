import { Component, Input } from '@angular/core';
import { PokemonData } from '../../models/pokemons.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
  imports: [CommonModule],
})
export class CardsComponent {
  @Input() pokemon: any | undefined;
}
