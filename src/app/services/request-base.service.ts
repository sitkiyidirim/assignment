import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/customer.model';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export abstract class RequestBaseService {

  protected currentUser: UserModel = new UserModel;
  protected constructor(protected authenticationService: AuthenticationService, protected http: HttpClient) {
    this.authenticationService.currentUser.subscribe(data => {
      this.currentUser = data;
    })
   }

   get getHeaders():HttpHeaders {
     return new HttpHeaders(
       {
         authorization:  'Bearer '+this.currentUser?.token_val,
         "Content-Type": "application/json; carset=UTF-8"
       }
     );
   }
}
