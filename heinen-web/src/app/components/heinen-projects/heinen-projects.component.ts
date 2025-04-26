import { Component } from '@angular/core';
import { MatIcon} from '@angular/material/icon';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle, MatCardSubtitle } from '@angular/material/card';
import { MatDivider } from '@angular/material/list';

@Component({
  selector: 'app-heinen-projects',
  imports: [
    MatIcon,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatCardTitle,
    MatCardSubtitle,
    MatDivider
  ],
  templateUrl: './heinen-projects.component.html',
  styleUrl: './heinen-projects.component.css'
})
export class HeinenProjectsComponent {

}
