import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({

  selector: 'app-header',

  standalone: true,

  imports: [
    RouterLink
  ],

  templateUrl: './header.component.html',

  styleUrl: './header.component.scss'

})


export class HeaderComponent {


  mobileMenuOpen = false;



  toggleMobileMenu(): void {

    this.mobileMenuOpen = !this.mobileMenuOpen;

  }



  closeMobileMenu(): void {

    this.mobileMenuOpen = false;

  }





  // ================================
  // EMPLOYEE HUB CONTROL
  // ================================


  openEmployeeSection(section: string): void {


    window.dispatchEvent(

      new CustomEvent(

        'employee-section',

        {
          detail: section
        }

      )

    );


    this.closeMobileMenu();


  }



}