import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSidenav } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    RouterLink,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  @ViewChild('sidenav') sidenav!: MatSidenav;

  toggleSidenav() {
    this.sidenav.toggle();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToLeistungen() {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        const element = document.getElementById('leistungen');
        if (element) {
          const offset = -150; // Move up 150px
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY + offset;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth',
          });
        }
      }, 100); // Delay ensures the component is loaded before scrolling
    });
  }

  scrollToStandorte() {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        const element = document.getElementById('standorte');
        if (element) {
          const offset = -150; // Move up 150px
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY + offset;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth',
          });
        }
      }, 100); // Delay ensures the component is loaded before scrolling
    });
  }

  scrollToTermin() {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        const element = document.getElementById('terminvergabe');
        if (element) {
          const offset = -150; // Move up 150px
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY + offset;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth',
          });
        }
      }, 100); // Delay ensures the component is loaded before scrolling
    });
  }
}
