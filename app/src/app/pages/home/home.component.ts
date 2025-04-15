import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
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
  pokemons = rxResource<AllPokemon, unknown>({
    loader: () => {
      return this.service.getAllPokemons();
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

  onSubimit() {
    // this.service.getPokemonByName(this.pokemonNameControl?.value).subscribe({
    //   next: (data: PokemonData) => {
    //     this.pokemons = data;
    //   },
    //   error: (error) => {
    //     console.log('Erro ao buscar o Pokemon', error);
    //   },
    // });
  }
}
