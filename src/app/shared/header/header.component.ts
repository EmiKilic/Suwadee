import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSidenav } from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @ViewChild('sidenav') sidenav!: MatSidenav;

  toggleSidenav() {
    this.sidenav.toggle();
  }

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
