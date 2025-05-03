import {AfterViewInit, Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-heinen-contact',
  imports: [
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatIcon
  ],
  templateUrl: './heinen-contact.component.html',
  styleUrl: './heinen-contact.component.css'
})
export class HeinenContactComponent implements AfterViewInit {
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
