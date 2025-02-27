import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-landing-page',
  imports: [MatButtonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  scrollToTermin() {
    const element = document.getElementById('terminvergabe');
    if (element) {
      const offset = -150; // Adjust this value to add extra space (negative moves up)
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY + offset;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  }
}
