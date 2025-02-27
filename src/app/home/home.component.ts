import { Component } from '@angular/core';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { AboutComponent } from '../about/about.component';
import { LeistungenComponent } from '../leistungen/leistungen.component';
import { StudiosComponent } from '../studios/studios.component';
import { KontaktComponent } from '../kontakt/kontakt.component';

@Component({
  selector: 'app-home',
  imports: [LandingPageComponent, AboutComponent, LeistungenComponent, StudiosComponent, KontaktComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {



}
