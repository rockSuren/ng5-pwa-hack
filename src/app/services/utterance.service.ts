import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { ConfigurationService } from './configuration.service';
import { AppService } from '../services/app.service';
import { HttpClient } from "@angular/common/http";
import { environment } from './../../environments/environment';
import { PolicyVO } from '../models/policyVo'
@Injectable()
export class UtteranceService {

  constructor(private http: Http,private httpClient : HttpClient, private configurationService: ConfigurationService,private AppService :AppService) {}

  handleError(error: any): any {
    return Observable.throw(error);
  }

  getUtterances(sentence) {
    const header = new Headers({ 'Content-Type': 'application/json', 'Active-User-Role': 'ROLE_ADMIN' });
    const url = this.configurationService.getUrl() + 'utterance-suggestions/wally/5';
    return this.http.post(url, JSON.stringify(sentence), { headers: header })
      .map((res) => res.json()).catch(this.handleError);
  }


   getPolicyDetails():Observable<PolicyVO> {
    
    let userName=this.AppService.user;
    return this.httpClient.get<PolicyVO>(environment.dialogFlowService+userName);
  }

  


  
}
