import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../api/api.service';
import { CommonModule } from '@angular/common';
import { AllPokemon, PokemonsList } from '../../models/allPokemons.model';
import { rxResource } from '@angular/core/rxjs-interop';
import { Pokebola8BitsComponent } from '../../components/pokebola8-bits/pokebola8-bits.component';
import { PaginatorComponent } from '../../components/paginador/paginador.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Pokebola8BitsComponent,
    PaginatorComponent,
  ],
  providers: [ApiService],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HomeComponent implements OnInit {
  pokemonSerchWordKey = signal('');
  pokemons = rxResource<AllPokemon, { parameters: string }>({
    request: () => ({ parameters: this.pokemonSerchWordKey() }),
    loader: ({ request }) => {
      return this.service.getAllPokemons(request.parameters);
    },
  });
  pageSize: number = 10;
  currentPage: number = 1;
  itensDaPaginaAtual: PokemonsList[] | undefined = [];

  constructor(private service: ApiService) {}

  serchPokemonHandler(event: Event) {
    const searchWord = (event.target as HTMLInputElement).value;
    this.pokemonSerchWordKey.set(searchWord);
  }

  ngOnInit(): void {
    this.updatePaginaAtual();
  }

  updatePaginaAtual(): void {
    if (!this.pokemons.value()?.results) return;
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.itensDaPaginaAtual = this.pokemons
      .value()?.results.slice(startIndex, endIndex);
  }

  onPageChanged(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.updatePaginaAtual();
  }
}
