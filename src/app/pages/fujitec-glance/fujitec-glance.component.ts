import { Component } from '@angular/core';

interface GlanceStat {
  value: string;
  label: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-fujitec-glance',
  standalone: true,
  imports: [],
  templateUrl: './fujitec-glance.component.html',
  styleUrl: './fujitec-glance.component.scss'
})
export class FujitecGlanceComponent {

  stats: GlanceStat[] = [
    {
      value: '4+',
      label: 'Locations',
      description: 'Fujitec India locations',
      icon: '⌖'
    },
    {
      value: '1000+',
      label: 'Employees',
      description: 'People across the organization',
      icon: '♙'
    },
    {
      value: '50+',
      label: 'Years',
      description: 'Of Fujitec experience worldwide',
      icon: '◷'
    },
    {
      value: '24/7',
      label: 'Support',
      description: 'Service and technical support',
      icon: '◉'
    }
  ];

}