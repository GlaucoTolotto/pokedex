import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../api/api.service';
import { PokemonData } from '../../models/pokemons.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false,
})
export class HomeComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: ApiService) {
    this.form = this.criarForm();
  }

  criarForm(): FormGroup {
    return this.formBuilder.group({ pokemonName: [''] });
  }

  get pokemonNameControl(){
    return this.form.get('pokemonName')
  }

  onSubimit() {
    this.service.getPokemon(this.pokemonNameControl?.value).subscribe({
      next: (data: PokemonData)=>{
        console.log(data)
      },
      error: (error)=>{
        console.log('Erro ao buscar o Pokemon', error);
      }
    })
  }
}
