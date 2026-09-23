import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quick-access',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quick-access.component.html',
  styleUrl: './quick-access.component.scss'
})
export class QuickAccessComponent {

  quickLinks = [
    {
      name: 'ERP by .NET',
      image: '/assets/quick-access/erp.png',
      fallback: 'ERP',
      url: '#'
    },
    {
      name: 'Gmail',
      image: '/assets/quick-access/gmail.png',
      fallback: 'G',
      url: '#'
    },
    {
      name: 'Outlook',
      image: '/assets/quick-access/outlook.png',
      fallback: 'O',
      url: '#'
    },
    {
      name: 'FPT',
      image: '/assets/quick-access/fpt.png',
      fallback: 'FPT',
      url: '#'
    },
    {
      name: 'DMS',
      image: '/assets/quick-access/dms.png',
      fallback: 'DMS',
      url: '#'
    },
    {
      name: 'DCN',
      image: '/assets/quick-access/dcn.png',
      fallback: 'DCN',
      url: '#'
    },
    {
      name: 'Adrenalin MAX',
      image: '/assets/quick-access/adrenalin.png',
      fallback: 'MAX',
      url: '#'
    },
    {
      name: 'F/JPN',
      image: '/assets/quick-access/fjpn.png',
      fallback: 'F/JPN',
      url: '#'
    },
    {
      name: 'Salesforce',
      image: '/assets/quick-access/salesforce.png',
      fallback: 'SF',
      url: '#'
    },
    {
      name: 'Service Desk',
      image: '/assets/quick-access/service-desk.png',
      fallback: 'IT',
      url: '#'
    },
    {
      name: 'MRB',
      image: '/assets/quick-access/mrb.png',
      fallback: 'MRB',
      url: '#'
    },
    {
      name: 'eMail Signature',
      image: '/assets/quick-access/email-signature.png',
      fallback: 'MAIL',
      url: '#'
    },
    {
      name: 'PAWS',
      image: '/assets/quick-access/paws.png',
      fallback: 'PAWS',
      url: '#'
    }
  ];

  imageFailed(event: Event): void {
    const image = event.target as HTMLImageElement;
    image.style.display = 'none';

    const fallback = image.parentElement?.querySelector(
      '.quick-link-fallback'
    ) as HTMLElement | null;

    if (fallback) {
      fallback.style.display = 'flex';
    }
  }
}