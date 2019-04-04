import { User } from './../../../models/user.model';
import { CommunicationService } from './../../../services/communication.service';
import { ChatService } from './../../../services/chat.service';
import { Component, OnInit, Input, ElementRef, ViewChild, Output } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { SpeechRecognitionService } from './../../../services/speech.recognition.service';
import { AppService } from './../../../services/app.service';
import { UtteranceService } from './../../../services/utterance.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
import {PolicyVO} from './../../../models/policyVo'
@Component({
  selector: 'app-bot-window',
  templateUrl: './bot-window.component.html',
  styleUrls: ['./bot-window.component.css']
})
export class BotWindowComponent implements OnInit, OnDestroy {

  @Input() sentence: string;
  @Input() speakerEnabled: string;
  @ViewChild('bottext') el: ElementRef;
  @Output() toggle:boolean=true;
  messages = [];
  selectedComponent = 'card-info';
  msg: any;
  leftPaneContent = [];
  subscriptionKey = 'ee709c3b9a444f359cc791e893cff52d';
  recognizer;
  private now: any;
  private listening = false;
  userId: any;
  voices: any;
  history: any;
  subscription: any;
  locale: any;
  time: any;
  sayTimeout = null;

  constructor(private chatService: ChatService, private appService: AppService, private communicationService: CommunicationService,
    private speechRecognitionService: SpeechRecognitionService, private UtteranceService:UtteranceService,private router: Router) {
    this.voices = speechSynthesis.getVoices();
    setInterval(() => {
      this.now = moment().format('dddd, MMM D, YYYY');
      this.time = moment().format('HH:mm');
      this.locale = '(' + new Date().toLocaleTimeString('en-us', { timeZoneName: 'short' }).split(' ')[2] + ')';
    }, 1);
    this.voices = speechSynthesis.getVoices();
  }
  

  ngOnInit() {
    this.userId = moment().format('MMMddYYYYhmmsssss');
    //this.userId = this.appService.user;
    this.subscription = this.communicationService.theMessageSource$.subscribe(
      (message) => {
        if (message.key === 'message' && message.value != null) {
          this.sendMessage(message.value);
        }
      });
    if (this.sentence) {
      this.sendMessage(this.sentence);
    }
  }
  toggleChat(){
    this.communicationService.toggle(false);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.speechRecognitionService.DestroySpeechObject();
    speechSynthesis.cancel();
  }

  toggleSpeakerEnabled() {
    if (this.speakerEnabled === 'true') {
      this.speakerEnabled = 'false';
    } else {
      this.speakerEnabled = 'true';
    }
  }

  public speak(text, callback) {
    console.log('speak called for ' + text);
    if (speechSynthesis.speaking || speechSynthesis.pending || speechSynthesis.paused) {
      console.log('Is speaking, cancelled');
      speechSynthesis.cancel();
      if (this.sayTimeout !== null) {
        clearTimeout(this.sayTimeout);
      }

      this.sayTimeout =     setTimeout(() => {
        this.speak(text, callback);
        console.log('Timeout expired. ');
      }, 250);

    } else {
      this.voices = speechSynthesis.getVoices();
      const u = new SpeechSynthesisUtterance(text);
      u.voice = this.voices[1];
      u.text = text;
      u.lang = 'en-US';
      console.log('starting speak for  ' + u.text + ' \n utterance Object  : ' + JSON.stringify(u));
      speechSynthesis.speak(u);
    }
  }


  public clearChat() {
    this.messages = [];
  }

  signOut() {
    this.router.navigateByUrl('signout');
  }

  private activateSpeechSearch(): void {
    this.listening = true;
    this.speechRecognitionService.record()
      .subscribe(
      // listener
      (value) => {
        this.sendMessage(value);
        this.listening = false;
      },
      // errror
      (err) => {
        console.log(err);
        this.listening = false;
        if (err.error === 'no-speech') {
          console.log('--restatring service--');
        }
      },
      // completion
      () => {
        this.listening = false;
        console.log('--complete--');
      });
  }

  checkIfDuplicate(message) {
    if (!this.history) {
      return false;
    }
    if (this.history[this.userId]) {
      const lastMessage = this.history[this.userId];
      if (lastMessage.message === message) {
        return true;
      }
    }
    return false;
  }

  playAudio() {
    let audio = new Audio();
    audio.src = "../../../assets/mic.mp3";
    audio.load();
    audio.play();
  }

  private sendMessage(message) {
    this.el.nativeElement.blur();
    if (message && !this.checkIfDuplicate(message)) {
      const usersMessage = {
        userId: 'You',
        userName: 'You',
        class: 'chat-right',
        iconClass: 'icon-right',
        icon: './../../../assets/images/user.png',
        text: ''
      };
      usersMessage.text = message;
      this.messages.push(usersMessage);
      const botRequest = {
        'userId': this.userId,
        'channelType': 'web',
        'text': message,
        'additionalParams': {
          'appName': 'wally',
          'requestSource': 'studio',
          'isQnaRequest': false,
          'empId': this.appService.winNbr,
          'actualUserId': this.appService.user
        }
      };
      if (!this.history) {
        this.history = {};
      }
      const lastMessage = { message: message, lastMessageTime: new Date() };
      this.history[this.userId] = lastMessage;

      this.chatService.getBotResponse(message).then( 
        (data) => {
       
          let dialogResult = data;
          console.log(dialogResult);
          
        const botResponse = {
            userId: '1234',
            userName: 'NIA',
            class: 'chat-left',
            iconClass: 'icon-left',
            icon: './../../../assets/images/bot.png',
            content: new messageVO()
          };
            let contentMessage = new messageVO();
            contentMessage.speak = dialogResult.fulfillment.speech;
            contentMessage.text = dialogResult.fulfillment.speech;
            if(!(dialogResult.fulfillment.messages.length==0)){
              if(dialogResult.fulfillment.messages[0].type === 4){
                if(dialogResult.fulfillment.messages[0].hasOwnProperty('payload') && !this.isEmptyContent(dialogResult.fulfillment.messages[0].payload)){
                    contentMessage.contentType = dialogResult.fulfillment.messages[0].payload.messages[0].payload.contentType;
                    contentMessage.content=dialogResult.fulfillment.messages[0].payload.messages[0].payload.content;
                   
                }
              }
            }
            if(this.isEmptyContent(contentMessage.contentType)){
              contentMessage.contentType = null;
            }
          botResponse.content = contentMessage;
          console.log(botResponse.content);
          //botResponse.content = data;
          // 
          if (botResponse) {

            if(botResponse.content['contentType'] === 'eligibility-info'){
                this.UtteranceService.getPolicyDetails().subscribe(
                  (result:PolicyVO) =>{
                    console.log(result)
                      if(!this.isEmptyContent(result)){
                      if(result.eligible){
                        botResponse.content['speak'] = "You are eligible for "+ result.noofleaves + " days of leave";
                        botResponse.content['text'] = "You are eligible for "+result.noofleaves + " days of leave";
                      }else{
                      botResponse.content['speak'] = "You are not eligible for maternity leaves";
                        botResponse.content['text'] = "You are not eligible for maternity leaves";
                      }
                      this.messages.push(botResponse);
                      this.leftPaneContent = [];
                      this.speak(botResponse.content['speak'], "null");
                      if (!this.isEmptyContent(botResponse.content['speak'] ) && this.speakerEnabled === 'true') {
                        this.speak(botResponse.content['speak'], "null");
                      }
                    }
                  }
                )
            }else{
              this.messages.push(botResponse);
              this.leftPaneContent = [];
              if (botResponse.content && (botResponse.content['contentType'] === 'list-card' ||
                botResponse.content['contentType'] === 'list-view'
                || botResponse.content['contentType'] === 'video-conf'
                || botResponse.content['contentType'] === 'list-layout' ||
                botResponse.content['contentType'] === 'dashboard-card' ||
                botResponse.content['contentType'] === 'carousel' ||
                botResponse.content['contentType'] === 'about-card' ||
                botResponse.content['contentType'] === 'calendar-form' || botResponse.content['contentType'] ==='maternity') ||
                botResponse.content['contentType'] === 'card-compare') {
                this.leftPaneContent.push(botResponse);
                this.appService.botResponse=botResponse;
              }
              if (!this.isEmptyContent(botResponse.content['speak'] ) && this.speakerEnabled === 'true') {
                this.speak(botResponse.content['speak'], "null");
              }
                
            }
          }
        },
        (error) => {
          console.log('Some error occurred in making request to chatbot : ' + error);
        }
      );
     this.speechRecognitionService.DestroySpeechObject();
    }
  }
  isEmptyContent(contentType):boolean{
    return contentType === null || contentType === undefined || contentType === "";
  }
 
 
}


    
export class messageVO{
  speak:string;
  text:string;
  contentType:any;
  content:any;

}

