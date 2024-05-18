import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGModule } from './prime-ng/prime-ng.module';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimeNGModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GMTransportTest';

  constructor(private primengConfig: PrimeNGConfig){
    this.primengConfig.ripple = true; //$ PROPIEDAD PARA QUE LOS BOTONES TENGAN UN EFECTO AL SER PRESIONADOS
  }
}
