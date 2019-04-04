import { Component, OnInit, Input } from '@angular/core';
import { AppService } from './../../../../services/app.service';

@Component({
  selector: 'app-bot-message-renderer',
  templateUrl: './bot-message-renderer.component.html',
  styleUrls: ['./bot-message-renderer.component.css']
})
export class BotMessageRendererComponent implements OnInit {

  @Input('component-model') componentModel: any;
  userId: any;
  
  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.userId = this.appService.user;
    
  }

}
