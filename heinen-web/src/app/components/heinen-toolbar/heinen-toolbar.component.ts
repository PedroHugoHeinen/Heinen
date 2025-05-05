import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-heinen-toolbar',
  standalone: true,
  imports: [ CommonModule, MatToolbarModule ],
  templateUrl: './heinen-toolbar.component.html',
  styleUrls: [ './heinen-toolbar.component.css' ]
})

export class HeinenToolbarComponent {
  sections: { id: string; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'professional', label: 'Profissional' },
    { id: 'projects', label: 'Projetos' },
    { id: 'solutions', label: 'Soluções' },
    { id: 'contact', label: 'Contato' }
  ];

  activeSection: string = 'home';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.sections.forEach(sec => {
      const el = document.getElementById(sec.id);
      if (el) {
        const { top, bottom } = el.getBoundingClientRect();
        if (top <= 100 && bottom >= 100) {
          this.activeSection = sec.id;
        }
      }
    });
  }

  scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView();
  }
}
