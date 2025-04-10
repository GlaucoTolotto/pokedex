import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false,
  providers: [ApiService]
})
export class HomeComponent {
  form = this.criarForm();

  constructor(private formBuilder: FormBuilder, private service: ApiService) {}

  criarForm(): FormGroup {
    return this.formBuilder.group({ pokemonName: [''] });
  }

  get pokemonNameControl(){
    return this.form.get('pokemonName')
  }

  onSubimit() {
    this.service.getPokemon(this.pokemonNameControl?.value).subscribe(data => console.log(data))
  }
}
