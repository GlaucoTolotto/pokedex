import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import { ComponentsModule } from './components/components.module';

@NgModule({
  imports: [CommonModule, AppRoutingModule, ComponentsModule],
})
export class AppModule {}
