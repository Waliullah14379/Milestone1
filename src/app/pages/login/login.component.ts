import { Component, OnInit } from '@angular/core';
import {FormControl , FormGroup , Validators} from '@angular/forms'
import {Router} from  '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  loginFormData: any

  constructor( private router: Router) { }
    onFormSubmit(){
      console.warn(this.loginForm.value);
    localStorage.setItem('loginFormData', JSON.stringify(this.loginForm.value))
    this.router.navigate(['/dashboard'])
    console.log("form submitted");
    
  }
  
  ngOnInit() {
    this.loginForm = new FormGroup({
      companyId: new FormControl( '' ,[ Validators.required ]) ,
      companyName: new FormControl('' ,[ Validators.required ]),
      password : new FormControl('' , [Validators.required , Validators.pattern(/^[A-Z][a-zA-Z0-9.,$;]+$/), Validators.minLength(6)]),
    })
   
  }

}
