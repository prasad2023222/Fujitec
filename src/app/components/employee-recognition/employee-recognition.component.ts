import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';



interface EmployeeRecognition {

  name:string;

  photo:string;

  designation:string;

  department:string;

  location:string;

  experience:number;

  month:string;

  achievement:string;

}



interface TimelineItem {

  date:string;

  icon:string;

  name:string;

  award:string;

  description:string;

}





@Component({

  selector:'app-employee-recognition',

  standalone:true,

  imports:[
    CommonModule
  ],

  templateUrl:'./employee-recognition.component.html',

  styleUrl:'./employee-recognition.component.scss'

})


export class EmployeeRecognitionComponent {



currentEmployee:EmployeeRecognition = {


name:"Ananya Sharma",

photo:"assets/employees/ananya.jpg",

designation:"Senior Engineer",

department:"Engineering",

location:"Chennai",

experience:6,

month:"September 2026",

achievement:

"Recognized for outstanding contribution towards project delivery and process improvement."

};







timeline:TimelineItem[]=[


{

date:"JAN 2026",

icon:"🏆",

name:"Rahul Kumar",

award:"Innovation Award",

description:

"Created automation solutions improving team efficiency."

},



{

date:"MAR 2026",

icon:"⭐",

name:"Priya Sharma",

award:"Excellence Award",

description:

"Recognized for exceptional employee engagement initiatives."

},



{

date:"JUNE 2026",

icon:"🤝",

name:"Arjun Kumar",

award:"Team Player Award",

description:

"Supported multiple departments during critical projects."

}


];



}