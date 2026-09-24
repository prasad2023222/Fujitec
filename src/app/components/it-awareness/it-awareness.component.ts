import { Component } from '@angular/core';

interface AwarenessItem {
  category: string;
  icon: string;
  title: string;
  summary: string;
  details: string[];
}

@Component({
  selector: 'app-it-awareness',
  standalone: true,
  imports: [],
  templateUrl: './it-awareness.component.html',
  styleUrl: './it-awareness.component.scss'
})
export class ItAwarenessComponent {

  awarenessItems: AwarenessItem[] = [

    {
      category: 'CYBER SECURITY',
      icon: '🔐',
      title: 'Protect Your Password',
      summary: 'Use strong and unique passwords for your work accounts.',
      details: [
        'Never share your password with anyone.',
        'Use a strong combination of letters, numbers and special characters.',
        'Avoid using easily guessable information such as your name or birthday.',
        'Never reuse your work password for personal accounts.'
      ]
    },

    {
      category: 'EMAIL SECURITY',
      icon: '✉',
      title: 'Think Before You Click',
      summary: 'Be careful when opening unexpected emails, links or attachments.',
      details: [
        'Check the sender before opening an email.',
        'Do not click suspicious links.',
        'Avoid opening unexpected attachments.',
        'Report suspicious emails through the appropriate company channel.'
      ]
    },

    {
      category: 'DATA PROTECTION',
      icon: '🛡',
      title: 'Protect Company Data',
      summary: 'Handle company information carefully and responsibly.',
      details: [
        'Do not share confidential information with unauthorised people.',
        'Store important files only in approved company locations.',
        'Lock your computer whenever you leave your desk.',
        'Avoid transferring company information through personal accounts.'
      ]
    },

    {
      category: 'DEVICE SECURITY',
      icon: '💻',
      title: 'Keep Your Device Secure',
      summary: 'Simple habits can help protect your workstation and company network.',
      details: [
        'Keep your operating system and applications updated.',
        'Do not install unauthorised software.',
        'Use company-approved security tools.',
        'Report unusual device behaviour to the IT team.'
      ]
    },

    {
      category: 'REMOTE WORK',
      icon: '🌐',
      title: 'Stay Secure While Working Remotely',
      summary: 'Follow security practices whenever you work outside the office.',
      details: [
        'Use approved company VPN or remote-access tools.',
        'Avoid accessing confidential information on public computers.',
        'Be careful when using public Wi-Fi networks.',
        'Keep company devices with you and secured at all times.'
      ]
    },

    {
      category: 'AWARENESS',
      icon: '💡',
      title: 'Stay IT Aware',
      summary: 'Security is everyone’s responsibility.',
      details: [
        'Stay aware of common cybersecurity threats.',
        'Follow company IT policies and guidelines.',
        'Ask the IT team when you are unsure about a security issue.',
        'Report suspicious activity as soon as possible.'
      ]
    }

  ];

  selectedItem: AwarenessItem | null = null;

  openItem(item: AwarenessItem): void {
    this.selectedItem = item;
    document.body.style.overflow = 'hidden';
  }

  closeItem(): void {
    this.selectedItem = null;
    document.body.style.overflow = '';
  }
}