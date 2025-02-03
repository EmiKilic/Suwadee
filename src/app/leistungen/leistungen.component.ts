import {Component} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-leistungen',
  imports: [MatCardModule, MatChipsModule, MatProgressBarModule, MatButtonModule],
  templateUrl: './leistungen.component.html',
  styleUrl: './leistungen.component.scss'
})
export class LeistungenComponent {

}
