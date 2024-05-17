import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavesListComponent } from './naves-list/naves-list.component';
import { Nave } from './nave';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [NavesListComponent],
  declarations: [NavesListComponent],
})
export class NavesModule { }
