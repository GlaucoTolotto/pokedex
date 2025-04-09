import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from './app.routes';
import { ComponentsModule } from './components/components.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports:  [CommonModule, AppRoutingModule, ComponentsModule]
})
export class AppComponent {
  
}
