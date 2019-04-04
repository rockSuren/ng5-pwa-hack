import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})
export class BotComponent implements OnInit {

  private sentence: string;
  private showVideo:boolean = false;
  private showTile:boolean = true;
  private searchInput:string="";
  private now :any;
  private componentModel: any;
  private speakerEnabled: any;

  constructor(private router:Router) {
     setInterval(() => {      
          this.now = moment().format('MMMM Do YYYY, h:mm:ss a');
    }, 1);
   }

  ngOnInit() {
    let param = this.router.parseUrl(this.router.url);
    if(param && param.queryParams)
      this.sentence = ""; 
      this.speakerEnabled = false;
  }

  openTab(id:any){
    this.router.navigateByUrl('/wally/dashboard');
  }
} 