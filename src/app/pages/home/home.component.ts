import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickAccessComponent } from '../../components/quick-access/quick-access.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,QuickAccessComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {

  heroImages: string[] = [
    '/assets/image1.jpeg',
    '/assets/image2.jpeg',
    '/assets/image3.jpeg'
  ];

  currentHeroSlide = 0;

  private heroTimer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.startHeroSlider();
  }

  ngOnDestroy(): void {
    this.stopHeroSlider();
  }

  startHeroSlider(): void {
    this.stopHeroSlider();

    this.heroTimer = setInterval(() => {
      this.nextHeroSlide();
    }, 6000);
  }

  stopHeroSlider(): void {
    if (this.heroTimer) {
      clearInterval(this.heroTimer);
      this.heroTimer = undefined;
    }
  }

  nextHeroSlide(): void {
    this.currentHeroSlide =
      (this.currentHeroSlide + 1) % this.heroImages.length;
  }

  previousHeroSlide(): void {
    this.currentHeroSlide =
      (this.currentHeroSlide - 1 + this.heroImages.length) %
      this.heroImages.length;

    this.startHeroSlider();
  }

  goToHeroSlide(index: number): void {
    this.currentHeroSlide = index;
    this.startHeroSlider();
  }
}