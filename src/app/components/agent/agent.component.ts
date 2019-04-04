import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  employeeListData:any=[{
    "name" : "Karthick",
    "empId" : "658789",
    "type" : "Flight",
    "from" : "Chennai",
    "to" : "Bangalore",
    "date" : "25-MAR-2019",
    "time" : "09:00",
    "travelNo":"D28151523"
  },
  {
    "name" : "Karthick",
    "empId" : "658789",
    "type" : "Taxi",
    "from" : "Mcity",
    "to" : "Chennai Airport",
    "date" : "25-MAR-2019",
    "time" : "06:00",
    "travelNo":"C15827890"
  }];


}
