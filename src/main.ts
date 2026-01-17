import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter, withInMemoryScrolling } from '@angular/router'; // Importa esto
import { routes } from './app/app.routes';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(App, {
  providers: [
    // AÑADE LA CONFIGURACIÓN AQUÍ
    provideRouter(routes, withInMemoryScrolling({ 
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled' 
    })),
    importProvidersFrom(HttpClientModule)
  ]
});