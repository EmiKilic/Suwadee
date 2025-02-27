import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  imports: [MatIconModule],
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
}
