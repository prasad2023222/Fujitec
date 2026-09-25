import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SupportContact {
  title: string;
  description: string;
  icon: string;
  phone: string;
  email: string;
  actionLabel: string;
  actionType: 'call' | 'email';
}

interface EmergencyContact {
  title: string;
  number: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-employee-support',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-support.component.html',
  styleUrl: './employee-support.component.scss'
})
export class EmployeeSupportComponent {

  activeCategory = 'all';

  emergencyContacts: EmergencyContact[] = [
    {
      title: 'Security',
      number: '100',
      icon: '🛡️',
      description: 'For immediate security assistance'
    },
    {
      title: 'Medical Emergency',
      number: '108',
      icon: '🚑',
      description: 'For urgent medical assistance'
    },
    {
      title: 'Fire & Safety',
      number: '101',
      icon: '🚒',
      description: 'For fire or safety emergencies'
    }
  ];

  supportContacts: SupportContact[] = [
    {
      title: 'HR Support',
      description: 'For employee queries, policies, leave and people-related support.',
      icon: '👥',
      phone: '+91 44 0000 0000',
      email: 'hr@fujitec.com',
      actionLabel: 'Contact HR',
      actionType: 'email'
    },
    {
      title: 'IT Support',
      description: 'Get assistance with systems, applications, access and technical issues.',
      icon: '💻',
      phone: '+91 44 0000 0001',
      email: 'itsupport@fujitec.com',
      actionLabel: 'Contact IT',
      actionType: 'email'
    },
    {
      title: 'Admin & Facilities',
      description: 'Support for office facilities, transport, housekeeping and workplace services.',
      icon: '🏢',
      phone: '+91 44 0000 0002',
      email: 'admin@fujitec.com',
      actionLabel: 'Contact Admin',
      actionType: 'email'
    },
    {
      title: 'Security',
      description: 'For access-related assistance, security concerns and workplace safety.',
      icon: '🔐',
      phone: '+91 44 0000 0003',
      email: 'security@fujitec.com',
      actionLabel: 'Contact Security',
      actionType: 'call'
    }
  ];

  setCategory(category: string): void {
    this.activeCategory = category;
  }

  getSupportContacts(): SupportContact[] {
    if (this.activeCategory === 'all') {
      return this.supportContacts;
    }

    return this.supportContacts.filter(
      contact => contact.title.toLowerCase().includes(this.activeCategory.toLowerCase())
    );
  }

  call(number: string): void {
    window.location.href = `tel:${number}`;
  }

  email(address: string): void {
    window.location.href = `mailto:${address}`;
  }

}