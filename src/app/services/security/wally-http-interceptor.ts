import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { WallyHttpHeader } from "./wally-http-header";
import "rxjs/add/operator/finally";
import "rxjs/add/operator/do";

@Injectable()
export class WallyInterceptor extends WallyHttpHeader implements HttpInterceptor {

    

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     
        request = request.clone(
            {
                headers: this.headers
            }
        );

        return next.handle(request)
            .do(event => {
                if (event instanceof HttpResponse) {
                    //console.log('event --->' + JSON.stringify(event));
                }
            })
            .finally(() => console.log());;
    }
}