import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Aplicaciones } from './pages/aplicaciones/aplicaciones';
import { Nosotros } from './pages/nosotros/nosotros';
import { Tienda } from './pages/tienda/tienda';
import { Compania } from './pages/compania/compania';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'aplicaciones', component: Aplicaciones },
    { path: 'nosotros', component: Nosotros },
    { path: 'tienda', component: Tienda },
    { path: 'compania', component: Compania },
    { path: '**', redirectTo: '/home' }
];
