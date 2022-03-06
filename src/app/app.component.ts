import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from './models/customer.model';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';

  currentUser: UserModel =new UserModel();

  constructor(private authenticationService: AuthenticationService, private router: Router){
    this.authenticationService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
  }

  logOut(){
    this.authenticationService.logOut();
   this.router.navigate(['/login']);
  }
}
