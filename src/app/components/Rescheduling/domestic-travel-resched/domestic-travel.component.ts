import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {MatCardModule} from '@angular/material';
import{ FormBuilder,FormGroup,FormControl,FormGroupDirective,NgForm,Validators} from '@angular/forms';
import { routerTransition } from '../../../services/config/config.service';
@Component({
  selector: 'app-domestic-travel',
  templateUrl: './domestic-travel.component.html',
  styleUrls: ['./domestic-travel.component.css'],
  animations: [routerTransition()],
   host: {'[@routerTransition]': ''},   
   encapsulation: ViewEncapsulation.None
})
export class DomesticTravelReComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }
  travelForm:FormGroup;
  advAmt:boolean=false;
  agencies:String[];
  agenciesReview:object;
  agenciesRating:any;
  flights:FlightsVO[]=new Array<FlightsVO>();
  ngOnInit() {
    this.advAmt=true;
    this.travelForm=this.formBuilder.group({
      'travelType':['1'],
      'source':['Chennai'],
      'destination':['Bangalore'],
      'stDate':[new Date('2019-03-12')],
      'RtrnDt' :[new Date('2019-03-18')],
      'numOfPsgnr':[1],
      'chk':[true],
      'paymentType':[],
      'advAmount':[1000],
      'agency':['Uber']
    });
    this.agencies = ["Bharat cars","Ola","Uber"];
    this.agenciesReview = {
      "Make My Trip" : ["24/7 Service: Yes","Weekend support: No","Cancellation: Free"],
      "Goibibo": ["24/7 Service: No","Weekend support: No","Cancellation: Free"],
      "Cleartrip": ["24/7 Service: No","Weekend support: Yes","Cancellation: Charges Applicable"]
    }
    this.agenciesRating = {
      "Bharat cars" : 75,
      "Ola": 25,
      "Uber": 50
    }
  }

  change(event){
    if(event.checked){
      this.advAmt=true;
    }
    else{
      this.advAmt=false;
    }
  }

  fetchFlights(){
    this.flights=[{
      "airlines":"Indigo",
      "depCode":"MAA",
      "depTime":"04:20",
      "depCity":"Chennai",
      "depCountry":"India",
      "travelTime":"0h55m",
      "totalStops":0,
      "arrCode":"BLR",
      "arrTime":"05:15",
      "arrCountry":"India",
      "totalFare":1653,
      "arrCity":"Bangalore",
      "depDate":"03/06/2019",
      "arrDate":"03/06/2019"
    },{
      "airlines":"Indigo",
      "depCode":"MAA",
      "depTime":"04:20",
      "depCity":"Chennai",
      "depCountry":"India",
      "travelTime":"0h55m",
      "totalStops":0,
      "arrCode":"BLR",
      "arrTime":"05:15",
      "arrCountry":"India",
      "totalFare":1653,
      "arrCity":"Bangalore",
      "depDate":"03/06/2019",
      "arrDate":"03/06/2019"
    },
    {
      "airlines":"Indigo",
      "depCode":"MAA",
      "depTime":"04:20",
      "depCity":"Chennai",
      "depCountry":"India",
      "travelTime":"0h55m",
      "totalStops":0,
      "arrCode":"BLR",
      "arrTime":"05:15",
      "arrCountry":"India",
      "totalFare":1653,
      "arrCity":"Bangalore",
      "depDate":"03/06/2019",
      "arrDate":"03/06/2019"
    },
    {
      "airlines":"Indigo",
      "depCode":"MAA",
      "depTime":"04:20",
      "depCity":"Chennai",
      "depCountry":"India",
      "travelTime":"0h55m",
      "totalStops":0,
      "arrCode":"BLR",
      "arrTime":"05:15",
      "arrCountry":"India",
      "totalFare":1653,
      "arrCity":"Bangalore",
      "depDate":"03/06/2019",
      "arrDate":"03/06/2019"
    }]
  }

}

export class FlightsVO{
  airlines:string;
  depCode:string;
  depTime:string;
  depDate:string;
  arrDate:string;
  depCity:string;
  depCountry:string;
  travelTime:string;
  totalStops:number;
  arrCode:string;
  arrTime:string;
  arrCity:string;
  arrCountry:string;
  totalFare:number;
}