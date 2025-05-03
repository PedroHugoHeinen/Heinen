import {AfterViewInit, Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-heinen-professional',
  imports: [
    MatIcon
  ],
  templateUrl: './heinen-professional.component.html',
  styleUrl: './heinen-professional.component.css'
})
export class HeinenProfessionalComponent implements AfterViewInit {
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
