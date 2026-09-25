import { Component } from '@angular/core';

import { EmployeeCelebrationComponent }
from '../../components/employee-celebrations/employee-celebrations.component';

import { EmployeeRecognitionComponent }
from '../../components/employee-recognition/employee-recognition.component';



@Component({

  selector: 'app-employee-hub',

  standalone: true,

  imports: [
    EmployeeCelebrationComponent,
    EmployeeRecognitionComponent
  ],

  templateUrl: './employee-hub.component.html',

  styleUrl: './employee-hub.component.scss'

})


export class EmployeeHubComponent {


}