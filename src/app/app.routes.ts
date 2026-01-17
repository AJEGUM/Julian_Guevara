import { Routes } from '@angular/router';

export const routes: Routes = [

    { path: 'Inicio', loadComponent: () => import('./pages/inicio/inicio').then(m => m.Inicio) },
    { path: '', redirectTo: 'Inicio', pathMatch: 'full' },
    { path: '**', redirectTo: 'Inicio' }

];
