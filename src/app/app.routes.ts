import { Routes } from '@angular/router';
import { LOGINComponent } from './AUTH/LOGIN/login.component';

export const routes: Routes = [
    { 
        path: '',
        title: 'Iniciar sesión',
        pathMatch: 'full',
        component: LOGINComponent
    }
];
