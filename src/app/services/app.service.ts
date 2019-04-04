import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
    user: string;
    winNbr: number;
    questionList: any;
    dob: string;
    storeNbr : any;
    company:string;
    botResponse:any;

    constructor() {
       this.questionList = {
        1:"Mother's maiden name",
        2:"Your favourite personality",
        3:"Your high school name"
       }
       this.user = "Debra";
       this.winNbr = 600600602;
       this.storeNbr = 92285;
    }
}