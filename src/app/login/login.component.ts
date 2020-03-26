import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string="john";
passWord: string;

  constructor() { }
 
  ngOnInit() {
  }
  login(){
    if(this.userName == null || this.userName == ""){
      console.log("user is name is required");
    }
    }
 
 }
 