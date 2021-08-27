import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  public user = {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    profile:"default.png"
  }
  registerUser() {
    if (this.user.username.trim() == '' || this.user.username == null) {
      alert("User Name is required.")
      return;
    }
    if (this.user.firstName.trim() == '' || this.user.firstName == null) {
      alert("First Name is required.")
      return;
    }
    if (this.user.lastName.trim() == '' || this.user.lastName == null) {
      alert("Last Name  is required.")
      return;
    }
    if (this.user.email.trim() == '' || this.user.email == null) {
      alert("Email is required.")
      return;
    }
    this.userService.registerUser(this.user).subscribe(
      (data) => {
        alert("User registration successful.");
      },
      (error) => {
        alert("Some thing went wrong !!!");
      }
    );
  }
}
