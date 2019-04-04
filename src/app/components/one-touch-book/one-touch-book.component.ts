import { Component, OnInit } from '@angular/core';
import{ FormBuilder,FormGroup,FormControl,FormGroupDirective,NgForm,Validators} from '@angular/forms';
@Component({
  selector: 'app-one-touch-book',
  templateUrl: './one-touch-book.component.html',
  styleUrls: ['./one-touch-book.component.css']
})
export class OneTouchBookComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }
  bookingSuccess:boolean=false;
  destination:string="";
  source:string='Chennai';
  destCd:string='';
  sourceCd:string='MAA';
  oneClickForm:FormGroup;
  number:string='';
  requests:string[]=['Chennai-Bangalore','Chennai-Dallas','Chennai-Hyderabad','Hyderabad-Pune','Chennai-Bhubaneswar'];
  ngOnInit() {
    this.oneClickForm=this.formBuilder.group({
      'stDate':[''],
      'RtrnDt': [''],
    });
  }
  flightLst:flightLst[] ;
  returnflightLst:flightLst[]
  copy(num){
    if(num==2){
      this.destination="Bangalore";
      this.destCd='BLR';
      document.getElementById("2").style.background='lightgray';
      document.getElementById("4").style.background='white';
      document.getElementById("3").style.background='white';
    }
    else if(num==3){
      this.destination="Dallas";
      this.destCd='DFW';
      document.getElementById("3").style.background='lightgray';
      document.getElementById("2").style.background='white';
      document.getElementById("4").style.background='white';
    }
    else if(num==4){
      this.destination="Hyderabad";
      this.destCd='HYD';
      document.getElementById("4").style.background='lightgray';
      document.getElementById("2").style.background='white';
      document.getElementById("3").style.background='white';
    }
  }
  
   flightStaringPoint:string = "Chennai";
   flightEndingPoint:string = '';
   returnflightStaringPoint:string = '';
   returnflightEndingPoint:string = "Chennai";
   accmLst:accmLst[] ;
   taxiLst:taxiLst[]
   taxiLst1:taxiLst[] 
   secTaxiLst:taxiLst[]
   returnTaxiLst:taxiLst[]
   book(){
     let num=Math.floor(100000+Math.random()*900000);
     this.number="D"+num;
     this.bookingSuccess=true;
     this.flightLst = [
      { 
       airlines:"Indigo",
       depCode:"MAA",
       depTime:"04:20 HRS",
       depCity:"Chennai",
       depCountry:"India",
       travelTime:"0h55m",
       totalStops:0,
       arrCode:this.destCd,
       arrTime:"05:15 HRS",
       arrCountry:"India",
       totalFare:"TBC",
       arrCity: this.destination,
       depDate:this.oneClickForm.get('stDate').value,
       arrDate:this.oneClickForm.get('stDate').value,
       flightNo:"6E-502"
     }
     
     
     ];
     
     this.returnflightLst= [
    { 
     airlines:"Indigo",
     depCode:this.destCd,
     depTime:"10:20 HRS",
     depCity:this.destination,
     depCountry:"India",
     travelTime:"1h20m",
     totalStops:0,
     arrCode:this.sourceCd,
     arrTime:"11:40 HRS",
     arrCountry:"India",
     totalFare:"TBC",
     arrCity:this.source,
     depDate:this.oneClickForm.get('RtrnDt').value,
     arrDate:this.oneClickForm.get('RtrnDt').value,
     flightNo:"6E-504"
   }
   
   
   ];
   this.flightEndingPoint=this.destination;
   this.flightStaringPoint="Chennai";
   this.returnflightStaringPoint = this.destination;
   this.returnflightEndingPoint = "Chennai";


   this.accmLst= [{
    
    accomReqNo:123,
    acmName: "The Grand Chola",
    durationCheckIn:"Booking Pending",
    durationCheckOut:"Booking Pending",
    address:"2-75 Hotel Chola, Gandhi Street, "+this.destination,
    phno:"+91-7508976421",
    city:this.destination  }];

  this.taxiLst = [{
    taxReqNo:123,
    reqTxt: "Taxi Details",
    taxiNo : "Booking Pending",
    driverName:"-",
    pickUp:"Infosys, Mahindra City",
    drop:"Chennai Airport",
    travelDate:this.oneClickForm.get('stDate').value,
    pickupTime:"-",
    driverPhNo:"-"
  }];


  this.taxiLst1 = [{
    taxReqNo:123,
    reqTxt: "Taxi Details",
    taxiNo : "-",
    driverName:"-",
    pickUp:"Chennai Airport",
    drop:"Maraimalai Nagar",
    travelDate:this.oneClickForm.get('RtrnDt').value,
    pickupTime:"-",
    driverPhNo:"-"
  }];
  
  this.secTaxiLst = [{
  
  taxReqNo:576,
  reqTxt: "Taxi Details",
  taxiNo : "-",
  driverName:"-",
  pickUp:this.destination+" Airport",
  drop:"Gandhi Nagar",
  travelDate:this.oneClickForm.get('stDate').value,
  pickupTime:"-",
  driverPhNo:"-"
  }];
 
  this.returnTaxiLst = [{
  
    taxReqNo:776,
    reqTxt: "Taxi Details",
    taxiNo : "-",
    driverName:"-",
    pickUp:"Gandhi Nagar",
    drop:this.destination+" Airport",
    travelDate:this.oneClickForm.get('RtrnDt').value,
    pickupTime:"-",
    driverPhNo:"-"
    }];


   }


   

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
  totalFare:string;
  flightNo:string;
}