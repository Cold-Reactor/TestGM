import { Component } from '@angular/core';
import { PrimeNGModule } from '../../prime-ng/prime-ng.module';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  providers:[RouterModule],
  imports: [PrimeNGModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  //$Variables para obtener algunos elementos del sitio y modificarlos en el código
  verticalNav: any;
  menuBar: any;
  logoBar: any;
  overlay: any;

  //$ Variable para guardar el nombre del usuario que hizo login y mostrarlo en la barra horizontal
  loginNombre: string = 'USER';

  constructor(private router: Router) {
  }

  ngOnInit(): void{
    //$ Se obtiene la columna que contiene el menú y se oculta por defecto.
    this.verticalNav = document.getElementById('verticalNav');
    if(this.verticalNav != null){
      this.verticalNav.style.display = 'none';
  
      // //$ Se obtiene la barra horizontal.
      // this.menuBar = document.getElementById('menuBar');
  
      //$ Se obtiene el logo de la barra.
      this.logoBar = document.getElementById('logoBar');
  
      //$ Se obtiene la capa sobrepuesta.
      this.overlay = document.getElementById('overlay');
  
      //$ Se obtiene el nivel de scroll
      if(this.logoBar){window.onscroll = this.scrollFunction;}
    }
  }

  scrollFunction() {//* Función para controlar cuándo se va a modificar la barra del sitio.
    
    if (window.scrollY > 80) {//* Como se va a mostrar cuando esté abajo

      //$ El ancho del logo se ajusta a 60% del div donde está ubicado
      if(this.logoBar)
      this.logoBar.style.width = "30%";
      
      //$ El padding de la barra horizontal se reduce para acomodar mejor los botones
      // this.menuBar.style.padding = "0px 10px 0px 10px";
      
    } else {//* Como se va a mostrar cuando esté arriba

      //$ El ancho del logo se ajusta a 100% del div donde está ubicado
      if(this.logoBar)
      this.logoBar.style.width = "60%";
      
      //$ El padding de la barra horizontal vuelve a su valor original
      // this.menuBar.style.padding = "5px 10px 5px 10px";

    }
  }

  onLogout(){//* AQUÍ SE CIERRA SESIÓN
    // this.authService.logout()
    this.router.navigate(['']);
  }
}
