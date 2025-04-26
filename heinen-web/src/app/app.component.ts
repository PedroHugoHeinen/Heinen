import { Component } from '@angular/core';
import { HeinenToolbarComponent } from './components/heinen-toolbar/heinen-toolbar.component';
import { HeinenHomeComponent } from './components/heinen-home/heinen-home.component';
import { HeinenProjectsComponent } from './components/heinen-projects/heinen-projects.component';
import { HeinenProfessionalComponent } from './components/heinen-professional/heinen-professional.component';
import { HeinenSolutionsComponent } from './components/heinen-solutions/heinen-solutions.component';
import { HeinenContactComponent } from './components/heinen-contact/heinen-contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeinenToolbarComponent, HeinenHomeComponent, HeinenProjectsComponent, HeinenProfessionalComponent, HeinenSolutionsComponent, HeinenContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HEINEN';
}
