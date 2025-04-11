import { Component, OnInit } from '@angular/core';
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
import { AllPokemon, PokemonsList } from '../../models/allPokemons.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CardsComponent],
  providers: [ApiService],
})
export class HomeComponent implements OnInit {
  form: FormGroup;
  pokemons: any | undefined;

  constructor(private formBuilder: FormBuilder, private service: ApiService) {
    this.form = this.criarForm();
  }

  ngOnInit(): void {
    this.service.getAllPokemons().subscribe({
      next: (data: AllPokemon) => {
        this.pokemons = data.results;
      },
    });
  }

  criarForm(): FormGroup {
    return this.formBuilder.group({ pokemonName: [''] });
  }

  get pokemonNameControl() {
    return this.form.get('pokemonName');
  }

  onSubimit() {
    this.service.getPokemonByName(this.pokemonNameControl?.value).subscribe({
      next: (data: PokemonData) => {
        this.pokemons = data;
      },
      error: (error) => {
        console.log('Erro ao buscar o Pokemon', error);
      },
    });
  }
}
