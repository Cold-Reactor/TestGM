import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PrimeNGModule } from './prime-ng/prime-ng.module';
import { PrimeNGConfig } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './COMMONS/menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink,RouterLinkActive, PrimeNGModule,MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GMTransportTest';

  constructor(private primengConfig: PrimeNGConfig){

     //$ Se inicia la propiedad ripple de los botones
    this.primengConfig.ripple = true; //! PROPIEDAD PARA QUE LOS BOTONES TENGAN UN EFECTO AL SER PRESIONADOS
  
    //$ Traducciones
    this.primengConfig.setTranslation({
      accept: 'Sí',
      reject: 'No',
      emptyMessage: 'No se encontraron resultados',
      emptyFilterMessage: 'No se encontraron resultados',
      dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
      dayNamesShort: ['Dom.', 'Lun.', 'Mar.', 'Miérc.', 'Juev.', 'Vier.', 'Sáb.'],
      dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
      monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 
      'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    });
  }

}
