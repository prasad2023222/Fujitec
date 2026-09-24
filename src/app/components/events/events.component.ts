import { Component } from '@angular/core';

interface EventItem {
  day: string;
  month: string;
  year: string;
  category: string;
  title: string;
  description: string;
  location: string;
  time: string;
}

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {

  events: EventItem[] = [
    {
      day: '28',
      month: 'SEP',
      year: '2026',
      category: 'Corporate',
      title: 'Fujitec India Town Hall',
      description:
        'An opportunity for employees to connect with leadership, discuss achievements and understand upcoming initiatives.',
      location: 'Fujitec India',
      time: '10:00 AM'
    },
    {
      day: '03',
      month: 'OCT',
      year: '2026',
      category: 'People & Culture',
      title: 'Employee Engagement Day',
      description:
        'A day focused on collaboration, employee engagement and strengthening connections across teams.',
      location: 'Chennai',
      time: '09:30 AM'
    },
    {
      day: '15',
      month: 'OCT',
      year: '2026',
      category: 'Safety',
      title: 'Safety Awareness Programme',
      description:
        'An awareness programme focused on workplace safety, responsible practices and employee well-being.',
      location: 'Bengaluru',
      time: '11:00 AM'
    },
    {
      day: '22',
      month: 'OCT',
      year: '2026',
      category: 'Learning',
      title: 'Technology & Innovation Session',
      description:
        'A knowledge-sharing session highlighting technology, innovation and digital transformation initiatives.',
      location: 'Hyderabad',
      time: '02:00 PM'
    }
  ];

  selectedEvent: EventItem | null = null;

  openEvent(event: EventItem): void {
    this.selectedEvent = event;
    document.body.style.overflow = 'hidden';
  }

  closeEvent(): void {
    this.selectedEvent = null;
    document.body.style.overflow = '';
  }
}