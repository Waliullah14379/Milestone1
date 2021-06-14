import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl , FormGroup , Validators} from '@angular/forms'
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  emailVerificationForm: FormGroup
  constructor() { }
  ngOnInit() {
    this.emailVerificationForm = new FormGroup({
      email: new FormControl('' ,[ Validators.required ,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
    })
   }
   onFormSubmit(){
    // this.router.navigate(['/forgetPassword'])
    console.warn(this.emailVerificationForm.value);
  localStorage.setItem('emailVerificationForm', JSON.stringify(this.emailVerificationForm.value))
  
  }

 

}
