import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink, } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [MatIconModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToLeistungen() {
    const element = document.getElementById('leistungen');
    if (element) {
      const offset = -150; // Adjust this value to add extra space (negative moves up)
      const elementPosition = element.getBoundingClientRect().top + window.scrollY + offset;
  
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }

  scrollToStandorte() {
    const element = document.getElementById('standorte');
    if (element) {
      const offset = -150; // Adjust this value to add extra space (negative moves up)
      const elementPosition = element.getBoundingClientRect().top + window.scrollY + offset;
  
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }

  scrollToTermin() {
    const element = document.getElementById('terminvergabe');
    if (element) {
      const offset = -150; // Adjust this value to add extra space (negative moves up)
      const elementPosition = element.getBoundingClientRect().top + window.scrollY + offset;
  
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }
}
