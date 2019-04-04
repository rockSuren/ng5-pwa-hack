import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Message } from './message.model';
import {environment} from '../../environments/environment';
@Injectable()
export class ConfigurationService {
 private url= environment.chatApiEndPoint;


  getUrl() {
    return this.url;
  }
}
