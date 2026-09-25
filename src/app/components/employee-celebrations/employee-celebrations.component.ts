import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface EmployeeCelebration {

  name: string;

  photo: string;

  type: string;

  date: number;

  month: number;

  department: string;

  location: string;

  years?: number;

}



@Component({

  selector: 'app-employee-celebration',

  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl: './employee-celebrations.component.html',

  styleUrl: './employee-celebrations.component.scss'

})


export class EmployeeCelebrationComponent {


  // Calendar popup

  showCalendar = false;



  // Selected calendar date

  selectedDate: number | null = null;



  monthName = "September 2026";



  days:number[] = [

    1,2,3,4,5,6,7,

    8,9,10,11,12,13,14,

    15,16,17,18,19,20,21,

    22,23,24,25,26,27,28,

    29,30

  ];




  /*
    Employee data

    Later this will come from API
  */

  employees: EmployeeCelebration[] = [


    {

      name:"Rahul Kumar",

      photo:"assets/employees/rahul.jpg",

      type:"Birthday",

      date:24,

      month:9,

      department:"Production",

      location:"Chennai"

    },



    {

      name:"Priya Sharma",

      photo:"assets/employees/priya.jpg",

      type:"5 Years Anniversary",

      date:24,

      month:9,

      department:"HR",

      location:"Mumbai",

      years:5

    },



    {

      name:"Arjun Kumar",

      photo:"assets/employees/arjun.jpg",

      type:"Birthday",

      date:10,

      month:9,

      department:"IT",

      location:"Pune"

    },



    {

      name:"Sneha Rao",

      photo:"assets/employees/sneha.jpg",

      type:"10 Years Anniversary",

      date:10,

      month:9,

      department:"Finance",

      location:"Bangalore",

      years:10

    }


  ];





  // Initially empty

  selectedCelebrations: EmployeeCelebration[] = [];






  openCalendar(){

    this.showCalendar = true;

  }




  closeCalendar(){

    this.showCalendar = false;

  }





  selectDay(day:number){


    this.selectedDate = day;



    this.selectedCelebrations = this.employees.filter(

      employee =>

      employee.date === day

      &&

      employee.month === 9

    );


  }







  hasCelebration(day:number){


    return this.employees.some(

      employee =>

      employee.date === day

      &&

      employee.month === 9

    );


  }







  clearSelection(){


    this.selectedDate = null;


    this.selectedCelebrations = [];


  }







  sendWish(employee:EmployeeCelebration){


    alert(

      `Wish sent to ${employee.name}`

    );


  }



}