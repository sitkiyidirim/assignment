import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from './authentication.service';
import { RequestBaseService } from './request-base.service';

const API_URL=`${environment.BASE_URL}/v2/api/app_me`;

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailInformationService extends RequestBaseService{

  constructor(authenticatinService: AuthenticationService, http: HttpClient) {
    super(authenticatinService,http)
   }

   getCustomerDetailInformation(){
     return this.http.get(API_URL,{headers: this.getHeaders});
   }
}
