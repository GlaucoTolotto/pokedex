import { Component } from '@angular/core';
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

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CardsComponent],
  providers: [ApiService],
})
export class HomeComponent {
  form: FormGroup;
  pokemon: PokemonData | undefined;

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
    this.service.getPokemon(this.pokemonNameControl?.value).subscribe({
      next: (data: PokemonData) => {
        this.pokemon = data
      },
      error: (error) => {
        console.log('Erro ao buscar o Pokemon', error);
      },
    });
  }
}
