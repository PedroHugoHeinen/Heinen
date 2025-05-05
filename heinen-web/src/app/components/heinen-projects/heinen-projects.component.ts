import {AfterViewInit, Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import { MatIcon} from '@angular/material/icon';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader } from '@angular/material/card';
import { SECTION_IDS, SectionId } from '../../constants/sections';

@Component({
  selector: 'app-heinen-projects',
  imports: [
    MatIcon,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardActions
  ],
  templateUrl: './heinen-projects.component.html',
  styleUrl: './heinen-projects.component.css'
})
export class HeinenProjectsComponent implements AfterViewInit {
  readonly currentSection: SectionId = 'projects';
  readonly sections = SECTION_IDS;
  @ViewChildren('fadeInRef', { read: ElementRef }) fadeElements!: QueryList<ElementRef>;

  nextStep() {
    const idx = this.sections.indexOf(this.currentSection);
    const next = this.sections[idx + 1];
    if (!next) { return; }

    const container = document.getElementById('appContent')!;
    const targetEl = document.getElementById(next)!;
    container.scrollTo({
      top: targetEl.offsetTop,
      behavior: 'smooth'
    });
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    this.fadeElements.forEach(el => observer.observe(el.nativeElement));
  }
}
