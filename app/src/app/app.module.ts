import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ApiService } from './api/api.service';

@NgModule({
  declarations: [AppComponent, ApiService],
  imports: [CommonModule, ComponentsModule],
})
export class ComponentsModule {}
