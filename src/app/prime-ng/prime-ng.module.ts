import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { FloatLabelModule } from 'primeng/floatlabel';

@NgModule({
  exports:[
    FormsModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    TabMenuModule,
    TableModule,
    DropdownModule,
    CalendarModule,
    InputNumberModule,
    FloatLabelModule
  ],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PrimeNGModule { }
