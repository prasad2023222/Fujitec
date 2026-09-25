import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuickAccessComponent } 
from '../../components/quick-access/quick-access.component';

import { NewcomponentComponent } 
from '../../components/newcomponent/newcomponent.component';

import { EventsComponent } 
from '../../components/events/events.component';

import { ItAwarenessComponent } 
from '../../components/it-awareness/it-awareness.component';

import { FooterComponent } 
from '../../components/footer/footer.component';

import { FujitecGlanceComponent } 
from '../fujitec-glance/fujitec-glance.component';


import { EmployeeCelebrationComponent } 
from '../../components/employee-celebrations/employee-celebrations.component';


import { EmployeeRecognitionComponent }  
from '../../components/employee-recognition/employee-recognition.component';

import { EmployeeSupportComponent }
from '../../components/employee-support/employee-support.component';

import { SuggestionBoxComponent }
from '../../components/suggestion-box/suggestion-box.component';

@Component({

  selector: 'app-home',

  standalone: true,


  imports: [

    CommonModule,

    QuickAccessComponent,

    NewcomponentComponent,

    EventsComponent,

    ItAwarenessComponent,

    FooterComponent,

    FujitecGlanceComponent,

    EmployeeCelebrationComponent,

EmployeeRecognitionComponent,
EmployeeSupportComponent,
SuggestionBoxComponent 

  ],


  templateUrl: './home.component.html',

  styleUrl: './home.component.scss'

})


export class HomeComponent implements OnInit, OnDestroy {



  // ==============================
  // EMPLOYEE HUB CONTROL
  // ==============================

  employeeSection: string | null = null;




  // ==============================
  // HERO SLIDER
  // ==============================


  heroImages: string[] = [

    '/assets/image1.jpeg',

    '/assets/image2.jpeg',

    '/assets/image3.jpeg'

  ];



  currentHeroSlide = 0;



  private heroTimer?: ReturnType<typeof setInterval>;





  ngOnInit(): void {


    this.startHeroSlider();



    // Listen from Header Employee Hub dropdown

    window.addEventListener(

      'employee-section',

      this.employeeSectionHandler

    );


  }





  ngOnDestroy(): void {


    this.stopHeroSlider();



    window.removeEventListener(

      'employee-section',

      this.employeeSectionHandler

    );


  }







  // ==============================
  // EMPLOYEE HUB EVENT
  // ==============================


  employeeSectionHandler = (event: Event) => {

    const customEvent = event as CustomEvent;
  
    this.employeeSection = customEvent.detail;
  
    setTimeout(() => {
  
      let elementId = '';
  
      if (this.employeeSection === 'celebration') {
        elementId = 'employee-celebrations';
      }
  
      if (this.employeeSection === 'recognition') {
        elementId = 'employee-recognition';
      }
  
      if (this.employeeSection === 'support') {
        elementId = 'employee-support';
      }

      if (this.employeeSection === 'suggestion') {
        elementId = 'suggestion-box';
      }
  
      const element = document.getElementById(elementId);
  
      element?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
  
    }, 100);
  
  };







  // ==============================
  // HERO SLIDER
  // ==============================



  startHeroSlider(): void {


    this.stopHeroSlider();



    this.heroTimer = setInterval(() => {


      this.nextHeroSlide();


    },6000);


  }





  stopHeroSlider(): void {


    if(this.heroTimer){


      clearInterval(this.heroTimer);


      this.heroTimer = undefined;


    }


  }







  nextHeroSlide(): void {


    this.currentHeroSlide =

    (

      this.currentHeroSlide + 1

    )

    %

    this.heroImages.length;


  }








  previousHeroSlide(): void {


    this.currentHeroSlide =

    (

      this.currentHeroSlide - 1 +

      this.heroImages.length

    )

    %

    this.heroImages.length;



    this.startHeroSlider();


  }







  goToHeroSlide(index:number):void{


    this.currentHeroSlide = index;


    this.startHeroSlider();


  }



}