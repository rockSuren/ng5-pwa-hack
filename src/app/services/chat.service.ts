import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { ConfigurationService } from './configuration.service';
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient'
import { environment } from './../../environments/environment';

@Injectable()
export class ChatService {
  constructor(private http: Http, private configurationService: ConfigurationService) {}
  readonly token = environment.dialogflow.angularBot;
  readonly client = new ApiAiClient({ accessToken: this.token });

  handleError(error: any): any {
    return Observable.throw(error);
  }

  getBotResponse(msg) {
    
    return this.client.textRequest(msg).then((res) => res.result).catch(this.handleError);

    /* return this.http.post(url, JSON.stringify(req), { headers: header })
      .map((res) => res.json()).catch(this.handleError);*/
  } 
}
