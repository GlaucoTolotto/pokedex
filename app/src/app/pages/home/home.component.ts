import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../api/api.service';
import { CommonModule } from '@angular/common';
import { AllPokemon } from '../../models/allPokemons.model';
import { rxResource } from '@angular/core/rxjs-interop';
import { Pokebola8BitsComponent } from '../../components/pokebola8-bits/pokebola8-bits.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CommonModule, FormsModule, ReactiveFormsModule,Pokebola8BitsComponent],
  providers: [ApiService],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HomeComponent {
  pokemonSerchWordKey = signal('');
  pokemons = rxResource<AllPokemon, { parameters: string }>({
    request: () => ({ parameters: this.pokemonSerchWordKey() }),
    loader: ({ request }) => {
      return this.service.getAllPokemons(request.parameters);
    },
  });

  constructor(private service: ApiService) {}

  serchPokemonHandler(event: Event) {
    const searchWord = (event.target as HTMLInputElement).value;
    this.pokemonSerchWordKey.set(searchWord);
  }
}
