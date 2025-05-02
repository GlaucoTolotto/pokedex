import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-pokebola8-bits',
  imports: [CommonModule],
  templateUrl: './pokebola8-bits.component.html',
  styleUrl: './pokebola8-bits.component.scss',
})
export class Pokebola8BitsComponent {
  animate = false;

  triggerAnimation() {
    // Ativa a classe de animação
    this.animate = true;

    // Remove a classe após a animação terminar (ex: 1s)
    setTimeout(() => {
      this.animate = false;
    }, 1000); // tempo igual à duração da animação
  }
}
