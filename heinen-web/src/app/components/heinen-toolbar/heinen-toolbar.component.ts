import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-heinen-toolbar',
  standalone: true,
  imports: [ CommonModule, MatToolbarModule ],
  templateUrl: './heinen-toolbar.component.html',
  styleUrls: [ './heinen-toolbar.component.css' ]
})

export class HeinenToolbarComponent  implements AfterViewInit, OnDestroy {
  sections = [
    { id: 'home', label: 'Home' },
    { id: 'professional', label: 'Profissional' },
    { id: 'projects', label: 'Projetos' },
    { id: 'solutions', label: 'Soluções' },
    { id: 'contact', label: 'Contato' }
  ];
  activeSection = 'home';
  private container!: HTMLElement;
  private onScroll = () => this.updateActiveSection();

  ngAfterViewInit() {
    this.container = document.getElementById('appContent')!;
    this.container.addEventListener('scroll', this.onScroll, { passive: true });
    // dispara uma vez para calibrar o highlight inicial
    this.updateActiveSection();
  }

  ngOnDestroy() {
    this.container.removeEventListener('scroll', this.onScroll);
  }

  private updateActiveSection() {
    const scrollPos = this.container.scrollTop;
    const viewportMid = this.container.clientHeight / 2;
    for (const sec of this.sections) {
      const el = document.getElementById(sec.id)!;
      const top = el.offsetTop;
      const bottom = top + el.offsetHeight;
      if (scrollPos + viewportMid >= top && scrollPos + viewportMid < bottom) {
        this.activeSection = sec.id;
        break;
      }
    }
  }

  scrollToSection(id: string) {
    const el = document.getElementById(id)!;
    this.container.scrollTo({
      top: el.offsetTop,
      behavior: 'smooth'
    });
  }
}
