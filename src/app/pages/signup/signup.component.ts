import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public user = {
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: ""
  }
  registerUser() {
    if (this.user.username.trim() == '' || this.user.username == null) {
      alert("User Name is required.")
      return;
    }
    if (this.user.firstname.trim()== '' || this.user.firstname == null) {
      alert("First Name is required.")
      return;
    }
    if (this.user.lastname.trim() == '' || this.user.lastname == null) {
      alert("Last Name  is required.")
      return;
    }
    if (this.user.email.trim() == '' || this.user.email == null) {
      alert("Email is required.")
      return;
    }

   

  }
}
