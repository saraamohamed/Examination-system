import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  password: any;
  role: any;
  state: string = '';
  city: string = '';
  postalCode: string = '';
  age: number = 0;
  firstName: string = '';
  email: string = '';
  gender: string = '';
  message: string = '';
  phone: string = '';

  constructor(private router: Router) {}
  
  register() {

    // Navigate to home component
    this.router.navigate(['/about']);
  }
}