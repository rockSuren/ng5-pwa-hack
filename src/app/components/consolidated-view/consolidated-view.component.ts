import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes ,Router} from '@angular/router';
import { routerTransition } from '../../services/config/config.service';
import {CommunicationService} from '../../services/communication.service';
@Component({
  selector: 'app-consolidated-view',
  templateUrl: './consolidated-view.component.html',
  styleUrls: ['./consolidated-view.component.css'],
  animations: [routerTransition()],
	host: {'[@routerTransition]': ''}
})
export class ConsolidatedViewComponent implements OnInit {

  constructor(private router: Router,private comSer:CommunicationService) { }

  travelRecordsLst :travelRecords;
  selIndex : number;
  toggleChat:boolean=false;
  ngOnInit() {
    this.comSer.showChat$.subscribe(
      (flag) => {
       this.toggleChat=flag;
      });
  }
  panelOpenState = false;
  walletAmt = 2500;
  openNotif(){
    this.router.navigate(['/notifications']);
  }
 
  flightLst:flightLst[] = [
     { 
      airlines:"Indigo",
      depCode:"MAA",
      depTime:"04:20 HRS",
      depCity:"Chennai",
      depCountry:"India",
      travelTime:"0h55m",
      totalStops:0,
      arrCode:"BLR",
      arrTime:"05:15 HRS",
      arrCountry:"India",
      totalFare:1653,
      arrCity:"Bangalore",
      depDate:"25-MAR-2019",
      arrDate:"25-MAR-2019",
      flightNo:"6E-502"
    },
    { 
      airlines:"Spice Jet",
      depCode:"BLR",
      depTime:"06:00 HRS",
      depCity:"Bangalore",
      depCountry:"India",
      travelTime:"0h45m",
      totalStops:0,
      arrCode:"HYD",
      arrTime:"06:45 HRS",
      arrCountry:"India",
      totalFare:1800,
      arrCity:"Hyderabad",
      depDate:"25-MAR-2019",
      arrDate:"25-MAR-2019",
      flightNo:"SG-3309"
    }
    
    ];
    flightStaringPoint:string = "Chennai";
    flightEndingPoint:string = "Hyderabad";



    returnflightLst:flightLst[] = [
      { 
       airlines:"Indigo",
       depCode:"HYD",
       depTime:"10:20 HRS",
       depCity:"Hyderabad",
       depCountry:"India",
       travelTime:"1h20m",
       totalStops:0,
       arrCode:"MAA",
       arrTime:"11:40 HRS",
       arrCountry:"India",
       totalFare:1853,
       arrCity:"Chennai",
       depDate:"28-MAR-2019",
       arrDate:"28-MAR-2019",
       flightNo:"6E-504"
     }
     
     
     ];
     returnflightStaringPoint:string = "Hyderabad";
     returnflightEndingPoint:string = "Chennai";


    accmLst:accmLst[] = [{
      
      accomReqNo:123,
      acmName: "The Grand Chola",
      durationCheckIn:"20-MAR-2019 06:00 HRS",
      durationCheckOut:"25-MAR-2019 18:00 HRS",
      address:"2-75 Hotel Chola, Gandhi Street, Hyderabad",
      phno:"+91-7508976421",
      city:"Hyderabad"
    }];

    taxiLst:taxiLst[] = [{
      taxReqNo:123,
      reqTxt: "Taxi Details",
      taxiNo : "TN 20 AF 1258 ",
      driverName:"Murali",
      pickUp:"Infosys, Mahindra City",
      drop:"Chennai Airport",
      travelDate:"25-MAR-2019",
      pickupTime:"03:00 HRS",
      driverPhNo:"+91-8497789503"
    }];

    
    taxiLst1:taxiLst[] = [{
      taxReqNo:123,
      reqTxt: "Taxi Details",
      taxiNo : "TN 40 AF 5678 ",
      driverName:"Ajay",
      pickUp:"Chennai Airport",
      drop:"Maraimalai Nagar",
      travelDate:"28-MAR-2019",
      pickupTime:"12:15 HRS",
      driverPhNo:"+91-8997789501"
    }];
    secTaxiLst:taxiLst[] = [{
    
    taxReqNo:576,
    reqTxt: "Taxi Details",
    taxiNo : "TL 02 L 1258 ",
    driverName:"Samarasimha Reddy",
    pickUp:"Hyderabad Airport",
    drop:"Gandhi Nagar",
    travelDate:"25-MAR-2019",
    pickupTime:"09:30 HRS",
    driverPhNo:"+91-9835957840"
    }];

    returnTaxiLst:taxiLst[] = [{
    
      taxReqNo:776,
      reqTxt: "Taxi Details",
      taxiNo : "TL 56 L 7258 ",
      driverName:"Narasimha Reddy",
      pickUp:"Gandhi Nagar",
      drop:"Hyderabad Airport",
      travelDate:"28-MAR-2019",
      pickupTime:"07:30 HRS",
      driverPhNo:"+91-8835957840"
      }];
  

    
  }


export class travelRecords{
  taxiLst:taxiLst[];
  accmLst:accmLst[];
  flightLst:flightLst[];
}
export class taxiLst{
  taxReqNo:number;
  reqTxt:string;
  taxiNo : String;
  driverName:String;
  pickUp:String;
  drop:String;
  travelDate:string;
  pickupTime:string;
  driverPhNo:String;
}


export class accmLst{
  accomReqNo:number;
  acmName:string;
  durationCheckIn : String;
  durationCheckOut:String;
  city:string;
  address:string;
  phno:string;
}

export class flightLst{
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
  flightNo:string;
}