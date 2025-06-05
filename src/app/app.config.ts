import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
//import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    importProvidersFrom(RouterModule.forRoot(routes, {useHash: true})),
  ]
    //provideClientHydration(withEventReplay())]
};
