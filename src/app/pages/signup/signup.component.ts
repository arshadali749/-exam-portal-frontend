import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService, private snack: MatSnackBar) { }

  ngOnInit(): void {
  }
  public user = {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    profile: "default.png"
  }
  registerUser() {
    if (this.user.username.trim() == '' || this.user.username.trim() == null) {
      alert("User Name is required.")
      return;
    }
    if (this.user.firstName.trim() == '' || this.user.firstName.trim() == null) {
      alert("First Name is required.")
      return;
    }
    if (this.user.lastName.trim() == '' || this.user.lastName.trim() == null) {
      alert("Last Name  is required.")
      return;
    }
    if (this.user.email.trim() == '' || this.user.email.trim() == null) {
      alert("Email is required.")
      return;
    }
    this.userService.registerUser(this.user).subscribe(
      (data) => {
        this.snack.open('Registration successful', '', {
          duration: 3000,
        });
        window.location.href = "login"
      },
      (error) => {
        alert("Some thing went wrong !!!");
      }
    );
  }
}
