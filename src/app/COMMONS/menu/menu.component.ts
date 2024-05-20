import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PrimeNGModule } from '../../prime-ng/prime-ng.module';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [PrimeNGModule,RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent { 
   //$ Variable para guardar el nombre del usuario que hizo login y mostrarlo en la barra horizontal
   loginNombre: string = 'Admin';
 
   constructor(private router: Router) {
   }
   ngOnInit(): void{}
 
   onLogout(){//* AQUÍ SE CIERRA SESIÓN
     this.router.navigate(['']);
   }
}
