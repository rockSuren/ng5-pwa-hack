import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-iternary',
  templateUrl: './request-iternary.component.html',
  styleUrls: ['./request-iternary.component.css']
})
export class RequestIternaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  employeeListData:any=[{
    "name" : "Karthick",
    "empId" : "658789",
    "type" : "Flight",
    "from" : "Chennai",
    "to" : "Bangalore",
    "dateIn" : "25-MAR-2019",
    "dateOut" : "25-MAR-2019",
    "timeIn" : "09:00 am",
    "timeOut" : "10:00 am"
  }];
  showTimer:boolean = false;
  timer:any;
  a:boolean = false;
  
  setTimer() {
    this.a= true;
    clearTimeout(this.timer);
    this.showTimer = true;
    this.timer = setTimeout(() => {
        this.showTimer = false;
    }, 2000);
  }

}
