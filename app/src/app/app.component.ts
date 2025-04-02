import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api/api.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ApiService]
})
export class AppComponent {
  title = 'app';

  constructor(private api: ApiService){}

  getPokemon(){
    this.api.getPokemon('ditto').subscribe(res => console.log(res))
  }

}
