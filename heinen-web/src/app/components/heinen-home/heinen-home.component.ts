import {AfterViewInit, Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatIcon} from '@angular/material/icon';
import { SECTION_IDS, SectionId } from '../../constants/sections';

@Component({
  selector: 'app-heinen-home',
  imports: [
    MatGridListModule,
    MatIcon
  ],
  templateUrl: './heinen-home.component.html',
  styleUrl: './heinen-home.component.css'
})
export class HeinenHomeComponent implements AfterViewInit {
  readonly currentSection: SectionId = 'home';
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
