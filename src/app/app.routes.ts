import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LeistungenComponent } from './leistungen/leistungen.component';
import { AboutComponent } from './about/about.component';
import { StudiosComponent } from './studios/studios.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'leistungen', component: LeistungenComponent },
    { path: 'studios', component: StudiosComponent },
    { path: 'kontakt', component: KontaktComponent },
    { path: 'impressum', component: ImprintComponent },
    { path: 'datenschutz', component: PrivacyPolicyComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' } // Fallback für ungültige URLs
  ];
  

