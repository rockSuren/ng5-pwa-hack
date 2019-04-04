import { Component, OnInit } from '@angular/core';
import{ FormBuilder,FormGroup,FormControl,FormGroupDirective,NgForm,Validators} from '@angular/forms';
import { ValidationService } from '../../../services/config/config.service';
import { StudentService } from '../../../services/student/student.service';
import { routerTransition } from '../../../services/config/config.service';
import { ToastrService } from 'ngx-toastr';
import { RouterModule, Routes ,Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-taxi',
  templateUrl: './taxi.component.html',
  styleUrls: ['./taxi.component.css']
})
export class TaxiReComponent implements OnInit {

 // create studentAddForm of type FormGroup 
 private studentAddForm : FormGroup;
 index:any;
 city:string[] = ['Chennai','Bangalore','Hyderabad'];
 purpose:string[] = ['Official','Personal','Projectrelated'];
 desk:string[] = ['GH_chennai','GH_Mcity'];
 agent:string[] = ['Automated Booking Ola/Uber','Self-booking-Ola/Uber','Yatra Travels'];
 drop:string[]=['Mahindra City','Akkam','Kukatpally','Electronic city'];
 pickup:string[]=['Chitlapakkam','Akkam','Kukatpally','Electronic city']
 currentDate = new Date();
 

constructor(private formBuilder: FormBuilder,private router: Router, private route: ActivatedRoute, private studentService:StudentService,private toastr: ToastrService) { 
    
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
   if (this.index && this.index != null && this.index != undefined) {
       this.studentAddForm.value.id = this.index
   }else{
       this.index = null;
   }
   let studentRegister = this.studentService.doRegisterStudent(this.studentAddForm.value, this.index);
   if(studentRegister) {
       if (studentRegister.code == 200) {
           this.toastr.success(studentRegister.message,"Success");
           this.router.navigate(['/']);
       }else{
           this.toastr.error(studentRegister.message,"Failed");
       }
   }
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
        value1:['Ram Kumar'],
        value2:['GH_Mcity'],
        value3:['03/09/2019'],
        value4:['09:00'],
        value5:['+91 95465 98765'],
        value6:['Chennai'],
        value7:['Automated Booking Ola/Uber'],
        value8:['Akkam'],
        value9:['Mahindra City'],
        value10:['No.4,Block B,Akkam'],
        value11:['Infosys,Mahindra City'],
        value12:['Official'],
        value13:['WMP7RM1'],
        value14:['jon_doe@infosys.com'],
        value15:['official travel']
       });         
   }else{
       this.studentAddForm = this.formBuilder.group({
        value1:[''],
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
        value12:[],
        value13:[],
        value14:[],
        value15:[]
       });
   }
}


}
