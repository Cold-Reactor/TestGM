import { Routes } from '@angular/router';
import { LoginComponent } from './AUTH/LOGIN/login.component';
import { InicioComponent } from './MAIN/inicio/inicio.component';
import { MenuComponent } from './COMMONS/menu/menu.component';

export const routes: Routes = [

    
    { 
        path: 'inicio',
        pathMatch: 'full',
        redirectTo: ''
    },
    {
        path: 'inicio',
        component: MenuComponent,
        children: [
            {
                path: 'catalogos',
                title: 'Catalogos',
                component: InicioComponent,
                // children: [
                //     {
                //         path: 'prueba',
                //         component: InicioComponent,

                //     }
                // ]
            },
        ]
        

    },
    { 
        path: '',
        title: 'Iniciar sesión',
        pathMatch: 'full',
        component: LoginComponent
    },
];
