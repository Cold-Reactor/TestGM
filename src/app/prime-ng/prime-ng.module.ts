import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports:[
    FormsModule,
    ButtonModule,
    ToastModule,
    InputTextModule
  ],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PrimeNGModule { }
