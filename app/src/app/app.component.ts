import { Component } from '@angular/core';
import { AppRoutingModule } from './app.routes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, AppRoutingModule],
})
export class AppComponent {}
