import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, map, Observable } from 'rxjs';
import { UserModel } from '../models/customer.model';

const API_URL=`${environment.BASE_URL}/p_login`;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
     public currentUser: Observable<UserModel>;
     private currentUserSubject: BehaviorSubject<UserModel>; 
    
  constructor(private http: HttpClient ) { 
    let storageUser;
    const storageUserAsStr = localStorage.getItem('currentUser');
    if(storageUserAsStr){
      storageUser=JSON.parse(storageUserAsStr);
    }
    this.currentUserSubject = new BehaviorSubject<UserModel>(storageUser);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue():UserModel {
    return this.currentUserSubject.value;
  }

  login(user : UserModel){
    return this.http.post<any>(API_URL, user).pipe(
      map(response => {
        if(response){
          localStorage.setItem('currentUser',JSON.stringify(response));
          this.currentUserSubject.next(response);
        }
        return response;
      })
    )
  }

  register(user:UserModel):Observable<any>{
    return this.http.post(API_URL+'sign_out', user);
  }

  logOut(){
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(new UserModel);
  }
}
