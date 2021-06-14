import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl , Validators} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpFormData
  constructor(private router: Router) { }
  signUpFormSubmit(){
    localStorage.setItem('signUpFormData', JSON.stringify(this.signUpForm.value))
    console.log(this.signUpForm.value);
    // this .signUpFormData = localStorage.getItem('signUpFormData')
    // this.signUpFormData = JSON.parse(this.signUpFormData)
    
this.router.navigate(['/dashboard'])      
}
  ngOnInit() {
  }
  signUpForm = new FormGroup({
    userName: new FormControl('' ,[ Validators.required , Validators.pattern(/^[A-Z][a-zA-Z/ ]{3,30}$/)]),
    password: new FormControl('' ,[ Validators.required , Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}') ]),
    confirmPassword: new FormControl('' ,[ Validators.required ]),
    email: new FormControl('' ,[ Validators.required ,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
    zip: new FormControl('' ,[ Validators.required ,  Validators.pattern(/^[0-9]{6,6}$/) ]),
    address: new FormControl('' ,[ Validators.required , Validators.pattern(/^[a-zA-Z0-9.+-_/// ]{3,50}$/)]),
    city: new FormControl('' ,[ Validators.required , Validators.pattern(/^[A-Z][a-zA-Z/ ]{3,20}$/)]),
    pin: new FormControl('' ,[ Validators.required , Validators.pattern(/^[0-9]{6,6}$/)])
   })

}
