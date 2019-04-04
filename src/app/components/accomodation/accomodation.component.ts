import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../services/config/config.service';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import { RouterModule, Routes ,Router,ActivatedRoute} from '@angular/router';
import { ValidationService } from '../../services/config/config.service';
import { StudentService } from '../../services/student/student.service';
import { NotifyService } from '../../services/notify/notify.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.css'],
  animations: [routerTransition()],
 	host: {'[@routerTransition]': ''}
})
export class AccomodationComponent implements OnInit {

  private studentAddForm : FormGroup;
     index:any;
     city:string[] = ['chennai','Bangalore','coimbatore'];
     purpose:string[] = ['official','personal','projectrelated'];
     desk:string[] = ['GH_chennai','GH_Mcity','GH_Bangalore','GH_Pune '];
     guesthouse:string[] = ['ECC','Any'];
     currentDate = new Date();
     hotels:HotelsVO[]=new Array<HotelsVO>();
     bookedhotel=new HotelsVO();
     bookingSuccess:boolean=false;
     timer:any;
    showTimer:boolean = false;

   constructor(private formBuilder: FormBuilder,private router: Router, private route: ActivatedRoute,
     private studentService:StudentService,private toastr: ToastrService, private notifyService: NotifyService) { 
        
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
   
   setTimer() {
    clearTimeout(this.timer);
    this.showTimer = true;
    this.timer = setTimeout(() => {
        this.showTimer = false;
    }, 2000);
  }
   submit(){
    this.setTimer();
    for(let i=0;i<this.hotels.length;i++){
        if(this.hotels[i].checked){
            this.bookingSuccess=true;
            this.bookedhotel=this.hotels[i];
        }
    }
   }
   // Submit student details form
   doRegister(){
        this.showPref();
        this.notifyService.sendNoti(environment.accmobile, "Dear Mohan, your Accomodation booking is confirmed. Details, Hotel Name: Royal Grand, Hotel Area: Area1, Room cost: Rs. 1588.");
      /* if (this.index && this.index != null && this.index != undefined) {
           this.studentAddForm.value.id = this.index
       }else{
           this.index = null;
       }
       let studentRegister = this.studentService.doRegisterStudent(this.studentAddForm.value, this.index);
       if(studentRegister) {
           if (studentRegister.code == 200) {
               this.toastr.success("Accomodation Registeration","Success");
               this.router.navigate(['/']);
           }else{
               this.toastr.error(studentRegister.message,"Failed");
           }
       }*/

   }
   showPref(){
    this.hotels=[
  {"hotelName":"Royal Grand",
	"hotelArea":"Area1",
	"wifi":false,
	"roomService":false,
	"gym":false,
	"reviews":"3/5",
	"rating":"1542",
    "price":1588,"Restaurant":false,
    "checked":false
  },
  {"hotelName":"Royal Grand Palace",
	"hotelArea":"Area2",
	"wifi":true,
	"roomService":true,
	"gym":false,
	"reviews":"4/5",
	"rating":"1555",
    "price":2020,"Restaurant":false,
    "checked":false
  },
  {"hotelName":" Grand ",
	"hotelArea":"Area3",
	"wifi":true,
	"roomService":false,
	"gym":false,
	"reviews":"4/5",
	"rating":"1655",
    "price":2150,"Restaurant":true,
    "checked":false
  },
  {"hotelName":" Grand Hotel",
	"hotelArea":"Area4",
	"wifi":true,
	"roomService":false,
	"gym":true,
	"reviews":"4/5",
	"rating":"1655",
    "price":2150,"Restaurant":true,
    "checked":false
  }];

    
   }

   // If this is update form, get user details and update form
   getStudentDetails(index:number){
       let studentDetail = this.studentService.getStudentDetails(index);
       this.createForm(studentDetail);
   }

   selected(index){
       for(let i=0;i<this.hotels.length;i++){
           if(i==index){
               this.hotels[i].checked=true;
           }
           else{
            this.hotels[i].checked=false;
           }
       }
   }
   lightbox_open() {
        let lightBoxVideo = <HTMLVideoElement> document.getElementById("VisaChipCardVideo");
        window.scrollTo(0, 0);
        document.getElementById('light').style.display = 'block';
        document.getElementById('fade').style.display = 'block';
        lightBoxVideo.play();
    }

    lightbox_close() {
        let lightBoxVideo = <HTMLVideoElement> document.getElementById("VisaChipCardVideo");
        document.getElementById('light').style.display = 'none';
        document.getElementById('fade').style.display = 'none';
        lightBoxVideo.pause();
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
export class HotelsVO{
  hotelName:string;
  hotelArea:string;
  wifi:boolean;
  roomService:boolean;
  Restaurant:boolean;
  gym:boolean;
  reviews:string;
  rating:string;
  price:number;
  checked:boolean;
}