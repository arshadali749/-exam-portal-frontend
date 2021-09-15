import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private snack: MatSnackBar, private login: LoginService, private router: Router) { }

  loginRequest = {
    username: '',
    password: ''
  }

  onFormSbmit() {
    if (this.loginRequest.username.trim() == "" || this.loginRequest.username == null) {
      this.snack.open('Please provide the username .', '', {
        duration: 3000
      });
      return;
    }
    if (this.loginRequest.password.trim() == "" || this.loginRequest.password == null) {
      this.snack.open('please provide the password .', '', {
        duration: 3000
      });
      return;

    }
    this.login.generateAuthToken(this.loginRequest).subscribe(
      (success: any) => {
        console.log("SUCCESS CALLED LoginComponent{}  onFormSbmit() :");

        console.log("TOKEN GENERATED ..");

        this.login.saveToken(success.token); //will store the token in local storage.

        this.login.getCurrentUser().subscribe(
          (user: any) => {
            this.login.setUserInfo(user);
            let userRole = this.login.getUserRole();
            console.log("USER ROLE : " + userRole);

            if (userRole == 'USER') {
              //  window.location.href = '/user/dashboard';
              this.router.navigate(['user/dashboard']);
            }
            else if (this.login.getUserRole() == "ADMIN") {
              //window.location.href = '/admin/dashboard';
              this.router.navigate(['admin/dashboard']);
            }
            else this.login.logOut();
          },
          (error) => {
            console.log("Some thing went wrong while fetching the current user info ..I");

          });

      },
      (error) => {
        console.log("SOME ERROR OCCURED :" + error);
        this.snack.open('Invalid details !! please try again with correct credentials ...', '', {
          duration: 3000
        })

      })
  }



  ngOnInit(): void {

  }

}
