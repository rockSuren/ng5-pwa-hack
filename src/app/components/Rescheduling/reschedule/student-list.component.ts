/**
 * Created By : Inf-Wm Account
 */

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

// Services
import { StudentService } from '../../../services/student/student.service';
import { routerTransition } from '../../../services/config/config.service';
import{ FormBuilder,FormGroup,FormControl,FormGroupDirective,NgForm,Validators} from '@angular/forms';
import { NotifyService } from '../../../services/notify/notify.service';

@Component({
	selector: 'app-student-list',
	templateUrl: './student-list.component.html',
	styleUrls: ['./student-list.component.css'],
	animations: [routerTransition()],
	host: {'[@routerTransition]': ''}
})

export class RescheduleComponent implements OnInit {
	studentList:any;
	hardware:any;
	software:any;
	timer:any;
	showTimer:boolean = false;
	flights:FlightsVO[]=new Array<FlightsVO>();
	showFlights:boolean=false;
	bookingSuccess:boolean=false;
	constructor(private studentService:StudentService,
		private toastr: ToastrService,private formBuilder:FormBuilder, private notifyService: NotifyService) { }
	selectedFlight :FlightsVO;
	travelForm=this.formBuilder.group({
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
	// Call student list function on page load 
	ngOnInit() {
		this.fetchHardware();
		this.fetchSoftware();
	}
	
	refreshSw() {
		this.setTimer();
		this.fetchSoftware();
	}
	refreshHw() {
		this.setTimer();
		this.fetchHardware();
	}
	handleSelectedFlight(flight) {
	   this.selectedFlight = flight;
	 }
   
	// Get student list from services
	// getStudentList(){
	// 	let studentList = this.studentService.getAllStudents();
	// 	this.success(studentList)
	// }

	// Get student list success
	fetchHardware(){
		this.notifyService.fetchHardwares().subscribe(
			data => { this.hardware = data},
			err => console.error(err),
		   () => console.log('done loading hardware')
		  );
		// this.hardware = [
		// 	{	
		// 		id : "ITL-HW-DESKT-000000396877",
		// 		sub_class : "DESKT",
		// 		allocation_type : "Temporary",
		// 		allocation_till : "12-11-2020",
		// 		action:"NO",
		// 		gatepass:"Y"		
		// 	},
		// 	{
		// 		id : "ITL-HW-IPPHN-000000309347",
		// 		sub_class : "IPPHN",
		// 		allocation_type : "Software Request",
		// 		allocation_till : "12-11-2020",
		// 		action:"No",
		// 		gatepass:"Y"		
		// 	}
			
		// 	];
		// for (var i = 0; i < this.hardware.length; i++) {
		// 	this.hardware[i].name = this.hardware[i].first_name +' '+ this.hardware[i].last_name;
		// }
	}
	fetchSoftware(){
		this.notifyService.fetchSoftwares().subscribe(
			      data => { this.software = data},
			      err => console.error(err),
			     () => console.log('done loading softwares')
			    );
		// this.software = [
		// 	{	
		// 		id : "ITL-HW-DESKT-000000396877",
		// 		sub_class : "DESKT",
		// 		allocation_type : "Temporary",
		// 		allocation_till : "12-11-2020",
		// 		action:"NO",
		// 		gatepass:"Y"		
		// 	},
		// 	{
		// 		id : "ITL-HW-IPPHN-000000309347",
		// 		sub_class : "IPPHN",
		// 		allocation_type : "Software Request",
		// 		allocation_till : "12-11-2020",
		// 		action:"No",
		// 		gatepass:"Y"		
		// 	}
			
		// 	];
		// for (var i = 0; i < this.hardware.length; i++) {
		// 	this.hardware[i].name = this.hardware[i].first_name +' '+ this.hardware[i].last_name;
		// }
	}
	bookFlights() {
	   this.bookingSuccess = true;
	   this.setTimer();
	 }

	// Delete a student with its index
	deleteStudent(index:number){
		// get confirm box for confirmation
		let r = confirm("Are you sure to reject the iTravel request?");
		if (r == true) {
			let studentDelete = this.studentService.deleteStudent(index);
			if(studentDelete) {
				this.toastr.success("Success", "iTravel Request Rejected");
			} 
			// this.getStudentList();
		}
	}

	// Approve a request with its index
	approveRequest(index:number){
		// get confirm box for confirmation
		//let r = confirm("Do you want to Reschedule the iTravel request?");
		
	}
	fetchFlights(){
		this.showFlights=true;
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
		 "depDate":"03/12/2019",
		 "arrDate":"03/12/2019",
		 "flightNo":"F"+Math.floor(100000+Math.random()*900000)
	   },{
		 "airlines":"Kingfisher",
		 "depCode":"BLR",
		 "depTime":"05:20",
		 "depCity":"Chennai",
		 "depCountry":"India",
		 "travelTime":"0h55m",
		 "totalStops":0,
		 "arrCode":"MAA",
		 "arrTime":"06:15",
		 "arrCountry":"India",
		 "totalFare":1432,
		 "arrCity":"Bangalore",
		 "depDate":"03/12/2019",
		 "arrDate":"03/12/2019",
		 "flightNo":"F"+Math.floor(100000+Math.random()*900000)
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
		 "depDate":"03/12/2019",
		 "arrDate":"03/12/2019",
		 "flightNo":"F"+Math.floor(100000+Math.random()*900000)
	   },
	   {
		 "airlines":"Vistara",
		 "depCode":"BLR",
		 "depTime":"15:00",
		 "depCity":"Chennai",
		 "depCountry":"India",
		 "travelTime":"0h55m",
		 "totalStops":0,
		 "arrCode":"MAA",
		 "arrTime":"15:55",
		 "arrCountry":"India",
		 "totalFare":1234,
		 "arrCity":"Bangalore",
		 "depDate":"03/12/2019",
		 "arrDate":"03/12/2019",
		 "flightNo":"F"+Math.floor(100000+Math.random()*900000)
	   }]
	 }
	 setTimer() {
	   clearTimeout(this.timer);
	   this.showTimer = true;
	   this.timer = setTimeout(() => {
		   this.showTimer = false;
	   }, 2000);
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
   flightNo:string;
 }
/**
* Created By : Inf-Wm Account
*/
