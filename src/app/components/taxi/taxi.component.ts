import { Component, OnInit } from '@angular/core';
import{ FormBuilder,FormGroup,FormControl,FormGroupDirective,NgForm,Validators} from '@angular/forms';
import { ValidationService } from '../../services/config/config.service';
import { StudentService } from '../../services/student/student.service';
import { routerTransition } from '../../services/config/config.service';
import { ToastrService } from 'ngx-toastr';
import { NotifyService } from '../../services/notify/notify.service';
import { RouterModule, Routes ,Router,ActivatedRoute} from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-taxi',
  templateUrl: './taxi.component.html',
  styleUrls: ['./taxi.component.css']
})
export class TaxiComponent implements OnInit {

 // create studentAddForm of type FormGroup 
 selected = true;
 timer:any;
 showTimer:boolean = false;
 private studentAddForm : FormGroup;
 index:any;
 city:string[] = ['Chennai','Bangalore','Hyderabad','Pune'];
 purpose:string[] = ['Client Visit','Airport Transfer','Local Usage-Project Related', 'Local Usage-Recruitment'];
 desk:string[] = ['Travel_ChennaiMcity','Travel_ChennaiShols'];
 agent:string[] = ['Automated Booking-Ola/Uber','Self-booking-Ola/Uber','Mercury Car Rentals', 'Madras Travels and Tours', 'Karthik travels Pvt Ltd', 'CARZONRENT'];
 drop:string[]=['Mahindra City','Adyar','Sholinganallur','Chennai Central', 'Chennai Airport','Akkam','Kukatpally','Electronic city'];
 pickup:string[]=['Mahindra City','Adyar','Sholinganallur','Chennai Central', 'Chennai Airport','Akkam','Kukatpally','Electronic city']
 currentDate = new Date();
 agenciesReview = {
      "Automated Booking-Ola/Uber" : ["24/7 Service: Yes","Weekend Support: Yes","Cancellation: Free"],
      "Self-booking-Ola/Uber": ["24/7 Service: No","Weekend Support: Yes","Cancellation: Free"],
      "Mercury Car Rentals": ["24/7 Service: No","Weekend Support: No","Cancellation: Charges Applicable"],
      "Madras Travels and Tours": ["24/7 Service: No","Weekend Support: Yes","Cancellation: Charges Applicable"],
      "Karthik travels Pvt Ltd": ["24/7 Service: No","Weekend Support: No","Cancellation: Charges Applicable"],
      "CARZONRENT": ["24/7 Service: No","Weekend Support: Yes","Cancellation: Charges Applicable"]
    }
agenciesRating = {
      "Automated Booking-Ola/Uber" : 85,
      "Self-booking-Ola/Uber": 65,
      "Mercury Car Rentals": 50,
      "Madras Travels and Tours": 30,
      "Karthik travels Pvt Ltd": 30,
      "CARZONRENT": 30
    }



constructor(private formBuilder: FormBuilder,private router: Router, private route: ActivatedRoute, private studentService:StudentService,private toastr: ToastrService, private notifyService: NotifyService) { 
    
   // Check for route params
   this.route.params.subscribe(params => {
       this.index = params['id'];
       // check if ID exists in route & call update or add methods accordingly
       if (this.index && this.index != null && this.index != undefined) {
           this.getStudentDetails(this.index);
       }else{
           this.createForm(null);
       }
   });
}

ngOnInit() {
}

employeeListData:any=[{
    "name" : "karthick",
    "empId" : "658789"
  },
  {
    "name" : "karthick",
    "empId" : "658789"
  }];

setTimer() {
    clearTimeout(this.timer);
    this.showTimer = true;
    this.timer = setTimeout(() => {
        this.showTimer = false;
    }, 2000);
  }
  change(event){
    if(event.checked){
      this.selected=true;
    }
    else{
      this.selected=false;
    }
  }
  

bookingSuccess:boolean=false;
taxiLst:taxiLst[]=new Array<taxiLst>() ;
// Submit student details form
doRegister(){
    this.notifyService.sendNoti(environment.taximobile, "Dear Chandra, You taxi booking from Infosys, Mahindra City to Chennai Airport is confirmed. Details: Pick up on 25-Mar-2019 @ 15:00, Driver: Murali, Contact: +91 9875895456, Vehicle TN 07 AB 7623.");
   /*if (this.index && this.index != null && this.index != undefined) {
       this.studentAddForm.value.id = this.index
   }else{
       this.index = null;
   }
   let studentRegister = this.studentService.doRegisterStudent(this.studentAddForm.value, this.index);
   if(studentRegister) {
       if (studentRegister.code == 200) {
           this.toastr.success("Taxi Booking Success","Success");
           this.router.navigate(['/']);
       }else{
           this.toastr.error(studentRegister.message,"Failed");
       }
   }*/
   this.bookingSuccess=true;
   this.taxiLst= [{
    taxReqNo:123,
    reqTxt: "Taxi Details",
    taxiNo : "TN 20 AF 1258 ",
    driverName:"Murali",
    pickUp:"Infosys, Mahindra City",
    drop:"Chennai Airport",
    travelDate:"25-MAR-2019",
    pickupTime:"15:00",
    driverPhNo:"+91 9875895456"
  }];

}

fetchtaxi(){
    this.setTimer();
}
// If this is update form, get user details and update form
getStudentDetails(index:number){
   let studentDetail = this.studentService.getStudentDetails(index);
   this.createForm(studentDetail);
}

// If this is update request then auto fill form
createForm(data){
   if (data == null) {
       this.studentAddForm = this.formBuilder.group({
           first_name: ['',  [Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
           last_name: ['',  [Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
           phone: ['',  [Validators.required,ValidationService.checkLimit(5000000000,9999999999)]],
           email: ['',  [Validators.required, ValidationService.emailValidator]]
       });         
   }else{
       this.studentAddForm = this.formBuilder.group({
           first_name: [data.studentData.first_name,  [Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
           last_name: [data.studentData.last_name,  [Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
           phone: [data.studentData.phone,  [Validators.required,ValidationService.checkLimit(5000000000,9999999999)]],
           email: [data.studentData.email,  [Validators.required, ValidationService.emailValidator]]
       });
   }
}


}
export class taxiLst{
    taxReqNo:number;
    reqTxt:string;
    taxiNo : String;
    driverName:String;
    driverPhNo:string;
    pickUp:String;
    drop:String;
    travelDate:string;
    pickupTime:string;
  }