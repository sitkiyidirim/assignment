import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { UserModel } from 'src/app/models/customer.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
     user:UserModel =new UserModel();
     faUser =faUserCircle;
     errorMessage: string = "";
   
  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    if(this.authenticationService.currentUserValue?.id){
      this.router.navigate(['/profile']);
      return;
    }
  }

  login(){
    this.authenticationService.login(this.user).subscribe(data => {
      this.router.navigate(['/customerDetailPage']);
    }, err => {
      this.errorMessage = 'Username or password is incorrect!';
      console.log(err);
    })
  }

}
