import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  OnInit,
  resource,
  ResourceRef,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ApiService } from '../../api/api.service';
import { PokemonData } from '../../models/pokemons.model';
import { CommonModule } from '@angular/common';
import { CardsComponent } from '../../components/cards/cards.component';
import { AllPokemon } from '../../models/allPokemons.model';
import { HttpClient } from '@angular/common/http';
import {rxResource } from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CardsComponent],
  providers: [ApiService],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HomeComponent implements OnInit {
  private httpClient = inject(HttpClient);
  form: FormGroup;
  pokemons = resource<AllPokemon, unknown>({
    loader: async () => {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=151'
      );
      const data = await response.json();
      return data.results;
    },
  });
  pokemons2 = rxResource<AllPokemon, unknown>({
    loader: () => {
     return this.httpClient.get<AllPokemon>('https://pokeapi.co/api/v2/pokemon?limit=151')
    },
  });
  // pokemons: AllPokemon | PokemonData | undefined;

  constructor(private formBuilder: FormBuilder, private service: ApiService) {
    this.form = this.criarForm();
  }

  ngOnInit(): void {

    // effect(() => {
    //   if (this.rxPokemons()) {
    //     this.pokemons = this.rxPokemons();
    //   }
    // });
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
