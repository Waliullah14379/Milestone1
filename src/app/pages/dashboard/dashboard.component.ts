import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loginFormData: any;
  companyName: any

  constructor() { }

  ngOnInit() {
    this.loginFormData= localStorage.getItem('loginFormData')
    this.loginFormData= JSON.parse(this.loginFormData)
    console.log(this.loginFormData);
    this.companyName =this.loginFormData.companyName
    
  }

}
