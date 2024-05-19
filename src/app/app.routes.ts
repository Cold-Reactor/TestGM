import { Routes } from '@angular/router';
import { LOGINComponent } from './AUTH/LOGIN/login.component';
import { InicioComponent } from './MAIN/inicio/inicio.component';

export const routes: Routes = [
    { 
        path: '',
        title: 'Iniciar sesión',
        pathMatch: 'full',
        component: LOGINComponent
    },
    { 
        path: 'Inicio',
        pathMatch: 'full',
        component: InicioComponent
    }
];
