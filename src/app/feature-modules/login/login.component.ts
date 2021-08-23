import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service'
import {Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userRole:string;
  signInFlag:boolean = true;
  buttonName:string = 'Login';
  alert:boolean;
  constructor(private loginService: LoginService,private  router:Router) { }

  ngOnInit(): void {
  }

  submitForm(form:NgForm){
    this.alert = false;
    if(form['username'] == 'user'&& form['password'] == 'user'){
      localStorage.setItem('isLoggedIn','true');
      localStorage.setItem('userRole','user');
      this.userRole = 'user';
      this.router.navigate(['/user-view']);
    } else if(form['username'] == 'admin'&& form['password'] == 'admin'){
      localStorage.setItem('isLoggedIn','true');
      localStorage.setItem('userRole','admin');
      this.userRole = 'admin';
      this.router.navigate(['/products'])
    }
    else {
      this.alert= true;
    }
  }
}
