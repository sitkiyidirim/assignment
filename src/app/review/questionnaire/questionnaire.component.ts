import { Component, OnInit } from '@angular/core';
import { QuestionnaireModel } from 'src/app/models/questionnaire.model';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  questions:any;
  anket:QuestionnaireModel =new QuestionnaireModel();

  constructor(private qestionnaireService:QuestionnaireService) { }

  toSendquestions:any;

  ngOnInit(): void {
      this.qestionnaireService.getQuestionQuestionnaire().subscribe(data => {
        this.questions=data;
       this.toSendquestions=this.questions;
      })
  }

  setQuestionnaire(){}

  selectedS:number=null;

  selected(num: number): void{
    for(let i =1; i<= 5; i++) {
      document.getElementById('rating'+i).classList.remove("selected");
    }
    document.getElementById('rating'+num).classList.add("selected");
    this.selectedS=num;
  }


  yesornot1Count :number=0;
  yesornot2Count :number=0;

  yesnoTrueFolse1:boolean=null;
  yesnoTrueFolse2:boolean=null;

  yesornot(whereClicked: number) : void{
    if(whereClicked == 1) {
      this.yesornot1Count++;
    if(this.yesornot1Count % 2 == 0) {
      this.yesnoTrueFolse1=false;
    } else {
      this.yesnoTrueFolse1=true;
    }
    }
    if(whereClicked == 2) {
      this.yesornot2Count++;
    if(this.yesornot2Count % 2 == 0) {
      this.yesnoTrueFolse2=false;
    } else {
      this.yesnoTrueFolse2=true;
    }
    }
  }

  globalSatisfactionLvl: number=null;
  satisfaction(satisfactionLvl: number): void{
    this.globalSatisfactionLvl=satisfactionLvl;
  }


  toSend(){
    if(this.yesnoTrueFolse1 != null){
      if(this.yesnoTrueFolse1 ){
        this.anket.survey_answers[0].answer ='Evet';
        this.anket.survey_answers[0].answer_numeric =10;
      }else{
        this.anket.survey_answers[0].answer ='Hayır';
        this.anket.survey_answers[0].answer_numeric =1;
      }
    }
    if(this.yesnoTrueFolse2 != null){
      if(this.yesnoTrueFolse2 ){
        this.anket.survey_answers[3].answer ='Evet';
        this.anket.survey_answers[3].answer_numeric =10;
      }else{
        this.anket.survey_answers[3].answer ='Hayır';
        this.anket.survey_answers[3].answer_numeric =1;
      }
    }

    if(this.selectedS !=null){
      if(this.selectedS == 1){
        this.anket.survey_answers[2].answer ="Hiç memnun değilim";
        this.anket.survey_answers[2].answer_numeric =2;
      }
      if(this.selectedS == 2){
        this.anket.survey_answers[2].answer ="Memnun değilim ";
        this.anket.survey_answers[2].answer_numeric =4;
      }
      if(this.selectedS == 3){
        this.anket.survey_answers[2].answer ="Vasat";
        this.anket.survey_answers[2].answer_numeric =6;
      }
      if(this.selectedS == 4){
        this.anket.survey_answers[2].answer ="Memnunum ";
        this.anket.survey_answers[2].answer_numeric =8;
      }
      if(this.selectedS == 5){
        this.anket.survey_answers[2].answer ="Çok memnunum";
        this.anket.survey_answers[2].answer_numeric =10;
      }
    }
    if(this.globalSatisfactionLvl != null ){
      this.anket.survey_answers[1].answer = ""+ this.globalSatisfactionLvl;
      this.anket.survey_answers[1].answer_numeric =this.globalSatisfactionLvl;
    }

    const textArea = document.getElementById('textAreaNote');
    this.anket.note = textArea['value'];

    let datam=null;
    this.qestionnaireService.getQuestionQuestionareLinkAnsver(this.anket).subscribe(data => {
      console.log(data);
      datam=data;

      if(datam.survey_result<7){
        document.getElementById('reviesFeedback').innerText=datam.survey_header.thanks_message_for_negative_reviews;
      }else{
        document.getElementById('reviesFeedback').innerHTML=datam.survey_header.thanks_message_for_positive_reviews+
        "<br><br> "+'<a id="myLinkStyle" class="btn btn-success" style="margin-left:2%; width:215px;"  href="'+datam.survey_header.positive_redirect_urls+ '">'+"link"+'</a>';
      }
     
    })


    document.getElementById('my-overlay').classList.remove("my-hidden");

    
  }

  closePopup() {
    document.getElementById('my-overlay').classList.add("my-hidden");
  }

}
