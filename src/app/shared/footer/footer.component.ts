import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule, RouterLink, MatMenuModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private router = inject(Router);

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
