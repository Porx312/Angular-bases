import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponentDbz } from './pages/main-page.component';
import { ListComponentDbz } from './components/list/list.component';
import { FormComponentDbz } from './components/form/form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MainComponentDbz,ListComponentDbz,FormComponentDbz],
  exports: [MainComponentDbz,ListComponentDbz, FormComponentDbz],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
