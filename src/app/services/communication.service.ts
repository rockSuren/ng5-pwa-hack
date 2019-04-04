import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Message } from './message.model';
@Injectable()
export class CommunicationService {
  theMessage: Message = new Message();

  // Observable selectedValue source
  private theMessageSource = new Subject<Message>();

  // Observable selectNode stream
  theMessageSource$ = this.theMessageSource.asObservable();
  private showChat = new Subject<boolean>();

  // Observable selectNode stream
  showChat$ = this.showChat.asObservable();

  toggle(flag:boolean){
    this.showChat.next(flag);
  }
  // service command
  communicate(message: Message) {

    this.theMessage = message;
    this.theMessageSource.next(message);
  }

  sendMessage(key: string, value: Object) {

    const message: Message = new Message();
    message.key = key;
    message.value = value;
    this.communicate(message);

  }
}
