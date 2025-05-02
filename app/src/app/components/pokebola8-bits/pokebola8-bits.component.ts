import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { PokemonsList } from '../../models/allPokemons.model';

@Component({
  selector: 'app-pokebola8-bits',
  imports: [CommonModule],
  templateUrl: './pokebola8-bits.component.html',
  styleUrl: './pokebola8-bits.component.scss',
})
export class Pokebola8BitsComponent {
  @Input() pokemon: PokemonsList | undefined;
  animate = false;

  triggerAnimation() {
    this.animate = !this.animate;
  }
}
