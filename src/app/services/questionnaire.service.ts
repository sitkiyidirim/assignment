import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from './authentication.service';
import { RequestBaseService } from './request-base.service';

const API_URL=`${environment.BASE_URL}/v2/api/`;

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService extends RequestBaseService {

  constructor(authenticatinService: AuthenticationService, http: HttpClient) {
    super(authenticatinService,http)
   }

   getQuestionQuestionnaire(){
     return this.http.get(API_URL+'main_survey/24',{headers: this.getHeaders});
   }

   getQuestionQuestionareLinkAnsver(answer:any){
     return this.http.post(API_URL+'survey_answer',answer,{headers: this.getHeaders});
   }
}
