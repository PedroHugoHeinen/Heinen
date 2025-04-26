import { Component } from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-heinen-solutions',
    imports: [
        MatCard,
        MatCardActions,
        MatCardContent,
        MatCardHeader,
        MatIcon
    ],
  templateUrl: './heinen-solutions.component.html',
  styleUrl: './heinen-solutions.component.css'
})
export class HeinenSolutionsComponent {

}
