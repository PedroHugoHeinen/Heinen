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
    for (const section of this.sections) {
      const el = document.getElementById(section.id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.activeSection = section.id;
          break;
        }
      }
    }
  }

  scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
