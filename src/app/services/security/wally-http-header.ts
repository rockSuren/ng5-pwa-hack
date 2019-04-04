import { HttpHeaders } from "@angular/common/http";

export abstract class WallyHttpHeader {

    get headers(): HttpHeaders {
        let headers: HttpHeaders = new HttpHeaders();
        this.defaultHeaders(headers);
        return headers;
    }

    defaultHeaders(headers: HttpHeaders) {
        headers.append('Content-Type', 'application/json;charset=utf-8');
        headers.append('Accept', 'application/json, text/plain, */*');
        headers.append('Access-Control-Allow-Origin', '*');
    }
}