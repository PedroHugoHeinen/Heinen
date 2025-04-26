import {AfterViewInit, Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatIcon} from '@angular/material/icon';

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
  @ViewChildren('fadeInRef', { read: ElementRef }) fadeElements!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    this.fadeElements.forEach(el => observer.observe(el.nativeElement));
  }
}
