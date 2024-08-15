import { Routes } from '@angular/router';
import { LoginComponent } from './feature/login/login.component';
import { RegisterComponent } from './feature/register/register.component';
import { PokedexComponent } from './feature/pokedex/pokedex.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component:RegisterComponent
    },
    {
        path: 'pokedex',
        component: PokedexComponent
    }
    
];