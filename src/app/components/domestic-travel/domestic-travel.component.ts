import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {MatCardModule} from '@angular/material';
import{ FormBuilder,FormGroup,FormControl,FormGroupDirective,NgForm,Validators} from '@angular/forms';
import { routerTransition } from '../../services/config/config.service';
import {CommunicationService} from '../../services/communication.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-domestic-travel',
  templateUrl: './domestic-travel.component.html',
  styleUrls: ['./domestic-travel.component.css'],
  animations: [routerTransition()],
   host: {'[@routerTransition]': ''},   
   encapsulation: ViewEncapsulation.None
})
export class DomesticTravelComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private comSer:CommunicationService,private toastr: ToastrService) { }
  travelForm:FormGroup;
  travelOpt:any;
  isInternational:boolean=false;
  advAmt:boolean=false;
  isPay:boolean=false;
  payType: string = "";
  agencies:String[];
  agenciesReview:object;
  agenciesRating:any;
  flights:FlightsVO[]=new Array<FlightsVO>();
  bookingSuccess:boolean = false;
  selectedFlight :FlightsVO;
  timer:any;
  showTimer:boolean = false;
  toggleChat:boolean=false;

  ngOnInit() {
    this.travelForm=this.formBuilder.group({
      'travelType':'',
      'source':[],
      'destination':[],
      'stDate':[],
      'RtrnDt' :[],
      'Upi' :[],
      'paymentType':[],
      'numOfPsgnr':['1'],
      'chk':[false],
      'chk1':[],
      'advAmount':[0]
    });
    this.comSer.showChat$.subscribe(
      (flag) => {
       this.toggleChat=flag;
      });
    this.agencies = ["International Travel House","Bharat International Travels","Kuoni Business Travels", 'Carlson Wagonlit Travels'];
    this.agenciesReview = {
      "International Travel House" : ["24/7 Service: Yes","Weekend Support: Yes","Cancellation: Free"],
      "Bharat International Travels": ["24/7 Service: No","Weekend Support: Yes","Cancellation: Free"],
      "Kuoni Business Travels": ["24/7 Service: No","Weekend Support: No","Cancellation: Charges Applicable"],
      "Carlson Wagonlit Travels": ["24/7 Service: No","Weekend Support: Yes","Cancellation: Charges Applicable"]
    }
    this.agenciesRating = {
      "International Travel House" : 85,
      "Bharat International Travels": 65,
      "Kuoni Business Travels": 50,
      "Carlson Wagonlit Travels": 30
    }
  }
  setTimer() {
    clearTimeout(this.timer);
    this.showTimer = true;
    this.timer = setTimeout(() => {
        this.showTimer = false;
        this.toastr.success("Request Submitted","Success");
    }, 2000);
  }

  change(event){
    if(event.checked){
      this.advAmt=true;
    }
    else{
      this.advAmt=false;
    }

    if(this.travelOpt==2)
    {
     this.isInternational=true;
    }
  }
  changechk(event){
    this.payType = event.value;
  }

  bookFlights() {
    this.bookingSuccess = true;
    this.setTimer();
  
  }

  handleSelectedFlight(flight) {
    this.selectedFlight = flight;
  }

  fetchFlights(){
    this.setTimer();
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
      "airlines":"Kingfisher",
      "depCode":"BLR",
      "depTime":"05:20",
      "depCity":"Bangalore",
      "depCountry":"India",
      "travelTime":"0h55m",
      "totalStops":0,
      "arrCode":"MAA",
      "arrTime":"06:15",
      "arrCountry":"India",
      "totalFare":1432,
      "arrCity":"Chennai",
      "depDate":"03/06/2019",
      "arrDate":"03/06/2019"
    },
    {
      "airlines":"SpiceJet",
      "depCode":"MAA",
      "depTime":"10:33",
      "depCity":"Chennai",
      "depCountry":"India",
      "travelTime":"1h00m",
      "totalStops":0,
      "arrCode":"BLR",
      "arrTime":"11:33",
      "arrCountry":"India",
      "totalFare":1645,
      "arrCity":"Bangalore",
      "depDate":"03/06/2019",
      "arrDate":"03/06/2019"
    },
    {
      "airlines":"Vistara",
      "depCode":"BLR",
      "depTime":"15:00",
      "depCity":"Bangalore",
      "depCountry":"India",
      "travelTime":"0h55m",
      "totalStops":0,
      "arrCode":"MAA",
      "arrTime":"15:55",
      "arrCountry":"India",
      "totalFare":1234,
      "arrCity":"Chennai",
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

