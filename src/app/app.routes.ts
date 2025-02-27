import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LeistungenComponent } from './leistungen/leistungen.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'leistungen', component: LeistungenComponent },
    { path: 'about', component: AboutComponent },
];
