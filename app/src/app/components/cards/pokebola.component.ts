import { Component, Input } from '@angular/core';
import { PokemonData } from '../../models/pokemons.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokebola',
  templateUrl: './pokebola.component.html',
  styleUrl: './pokebola.component.scss',
  imports: [CommonModule],
})
export class PokebolaComponent {
  @Input() pokemon: any | undefined;
}
