import { Component, OnInit } from '@angular/core';
import {FormControl , FormGroup , Validators} from '@angular/forms'
import {Router} from  '@angular/router'

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup
  constructor(private router:Router) { }

  ngOnInit() {
    this.resetPasswordForm = new FormGroup({
      password: new FormControl( '' ,[ Validators.required , Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}') ]) ,
      confirmPassword: new FormControl('' ,[ Validators.required ]),
    })
   }
   onFormSubmit(){
    this.router.navigate(['/login'])
    console.warn(this.resetPasswordForm.value);
  localStorage.setItem('resetPasswordForm', JSON.stringify(this.resetPasswordForm.value))
  
  }

}
