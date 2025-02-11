import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from './shared/footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { StudiosComponent } from './studios/studios.component';
import { LeistungenComponent } from './leistungen/leistungen.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, AboutComponent, HeaderComponent, FooterComponent, LandingPageComponent, KontaktComponent, StudiosComponent, LeistungenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular';
}
