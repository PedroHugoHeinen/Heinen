import {AfterViewInit, Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
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
export class HeinenProjectsComponent implements AfterViewInit {
  @ViewChildren('fadeInRef', { read: ElementRef }) fadeElements!: QueryList<ElementRef>;

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
