import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule para usar directivas como *ngIf y *ngFor
import { ListComponent } from './list/list.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    ListComponent,
    HeroComponent
  ],
  imports: [
    CommonModule // Asegúrate de importar CommonModule
  ],
  exports: [
    ListComponent,
    HeroComponent
  ]
})
export class HeroesModule { }
