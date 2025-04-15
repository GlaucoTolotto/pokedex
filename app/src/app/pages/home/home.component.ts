import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ApiService } from '../../api/api.service';
import { CommonModule } from '@angular/common';
import { CardsComponent } from '../../components/cards/cards.component';
import { AllPokemon } from '../../models/allPokemons.model';
import { rxResource } from '@angular/core/rxjs-interop';
import { PokemonData } from '../../models/pokemons.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CardsComponent],
  providers: [ApiService],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HomeComponent {
  form: FormGroup;
  pokemonSerchWordKey = signal('');
  pokemons = rxResource<AllPokemon, { parameters: string }>({
    request: () => ({ parameters: this.pokemonSerchWordKey() }),
    loader: ({ request }) => {
      return  this.service.getAllPokemons(request.parameters);
    },
  });

  constructor(private formBuilder: FormBuilder, private service: ApiService) {
    this.form = this.criarForm();
  }

  criarForm(): FormGroup {
    return this.formBuilder.group({ pokemonName: [''] });
  }

  get pokemonNameControl() {
    return this.form.get('pokemonName');
  }

  serchPokemonHandler(event: Event) {
    const searchWord = (event.target as HTMLInputElement).value;
    this.pokemonSerchWordKey.set(searchWord);
  }
}
