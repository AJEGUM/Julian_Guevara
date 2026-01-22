import { Routes } from '@angular/router';

export const routes: Routes = [
    // Rutas de la landing pages
    { path: 'Inicio', loadComponent: () => import('./pages/inicio/inicio').then(m => m.Inicio) },
    { path: '', redirectTo: 'Inicio', pathMatch: 'full' },
    { path: '**', redirectTo: 'Inicio' }

];
