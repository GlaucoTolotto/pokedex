import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { PokemonsList } from '../../models/allPokemons.model';

@Component({
  selector: 'app-paginator',
  imports: [],
  templateUrl: './paginador.component.html',
  styleUrl: './paginador.component.scss',
})
export class PaginatorComponent implements OnChanges {
  @Input() totalItems: number | undefined = 0;
  @Input() pageSize: number = 10;
  @Output() pageChanged = new EventEmitter<number>();
  totalPages: number = 0;
  currentPage: number = 1;
  pages: number[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['totalItems'] || changes['pageSize']) {
      this.updatePagination();
    }
  }

  updatePagination(): void {
    if(!this.totalItems)return
    this.totalPages = Math.ceil(this.totalItems / this.pageSize);
    this.updatePageList();
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages || page === this.currentPage) {
      return;
    }
    this.currentPage = page;
    this.pageChanged.emit(this.currentPage);
    this.updatePageList();
  }

  updatePageList(): void {
    this.pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      this.pages.push(i);
    }
  }

  goToPreviousPage(): void {
    this.changePage(this.currentPage - 1);
  }

  goToNextPage(): void {
    this.changePage(this.currentPage + 1);
  }
}
