import { Component } from '@angular/core';

interface NewsItem {
  category: string;
  date: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [],
  templateUrl: './newcomponent.component.html',
  styleUrl: './newcomponent.component.scss'
})
export class NewcomponentComponent {

  news: NewsItem[] = [
    {
      category: 'Company',
      date: '23 SEP 2026',
      title: 'Fujitec India strengthens its commitment to innovation',
      description:
        'Continuing our journey of innovation, collaboration and excellence across Fujitec India.'
    },
    {
      category: 'People & Culture',
      date: '18 SEP 2026',
      title: 'Building a stronger and more connected workplace',
      description:
        'Initiatives that encourage collaboration, engagement and a stronger workplace community.'
    },
    {
      category: 'Technology',
      date: '12 SEP 2026',
      title: 'Driving digital transformation across Fujitec',
      description:
        'Technology initiatives that help our teams stay connected, productive and future-ready.'
    },
    {
      category: 'Safety',
      date: '05 SEP 2026',
      title: 'Strengthening workplace safety awareness',
      description:
        'Continuing our focus on safety awareness and responsible practices across the organisation.'
    }
  ];

  selectedNews: NewsItem | null = null;

  openNews(item: NewsItem): void {
    this.selectedNews = item;
    document.body.style.overflow = 'hidden';
  }

  closeNews(): void {
    this.selectedNews = null;
    document.body.style.overflow = '';
  }
}