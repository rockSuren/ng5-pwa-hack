 import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';

 @Injectable()
 export class NotifyService {

     constructor(private http: HttpClient) { }

     sendNoti(mobile: number, msg: string){
         this.http.get(`http://localhost:5000/api/notify/sendmsg/${mobile}/${msg}`).subscribe(data => {
            console.log("sent");
        });
     }

     fetchSoftwares() {
        return this.http.get(`http://localhost:3000/api/softwares`);
     }

     fetchHardwares() {
        return this.http.get(`http://localhost:3000/api/hardwares`);
     }

     fetchAhd() {
        return this.http.get(`http://localhost:3000/api/ahd`);
     }
 }