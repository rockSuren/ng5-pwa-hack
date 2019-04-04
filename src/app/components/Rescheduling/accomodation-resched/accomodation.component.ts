import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../services/config/config.service';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import { RouterModule, Routes ,Router,ActivatedRoute} from '@angular/router';
import { ValidationService } from '../../../services/config/config.service';
import { StudentService } from '../../../services/student/student.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.css'],
  animations: [routerTransition()],
 	host: {'[@routerTransition]': ''}
})
export class AccomodationReComponent implements OnInit {

  private studentAddForm : FormGroup;
     index:any;
     city:string[] = ['chennai','Bangalore','coimbatore'];
     purpose:string[] = ['official','personal','projectrelated'];
     desk:string[] = ['GH_chennai','GH_Mcity','GH_Bangalore','GH_Pune '];
     guesthouse:string[] = ['ECC','Any'];
     currentDate = new Date();
     hotels:HotelsVO[]=new Array<HotelsVO>();

   constructor(private formBuilder: FormBuilder,private router: Router, private route: ActivatedRoute,
     private studentService:StudentService,private toastr: ToastrService) { 
        
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

   // Submit student details form
   doRegister(){
        this.showPref();
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
   // If this is update request then auto fill form
   createForm(data){
       if (data == null) {
           this.studentAddForm = this.formBuilder.group({
               value1:['Ram Kumar'],
               value2:['chennai'],
               value3:['03/08/2019'],
               value4:['09:00'],
               value5:['03/11/2019'],
               value6:['12:00'],
               value7:['official'],
               value8:['GH_Mcity'],
               value9:['ECC'],
               value10:['WMP7RM1'],
               value11:['jon_doe@infosys.com'],
               value12:['official accomodation']
           });         
       }else{
           this.studentAddForm = this.formBuilder.group({
            value1:[],
            value2:[],
            value3:[],
            value4:[],
            value5:[],
            value6:[],
            value7:[],
            value8:[],
            value9:[],
            value10:[],
            value11:[],
            value12:[]
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