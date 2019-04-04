import { Component, OnInit } from '@angular/core';
import{ FormBuilder,FormGroup,FormControl,FormGroupDirective,NgForm,Validators} from '@angular/forms';
import { routerTransition } from '../../services/config/config.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-bill-upload',
  templateUrl: './bill-upload.component.html',
  styleUrls: ['./bill-upload.component.css'],
  animations: [routerTransition()],
 	host: {'[@routerTransition]': ''}
})
export class BilluploadComponent implements OnInit {
  timer:any;
  showTimer:boolean = false;
  private studentAddForm : FormGroup;
  city:string[] = ['Pune','Bangalore','Hyderabad'];
  fromCity:string[] = ['Taxi','Accommodation','Food'];
  eligibilityData:{} = null;
  a = false;
  constructor(private formBuilder: FormBuilder,private toastr: ToastrService) { 
    
       this.studentAddForm = this.formBuilder.group({
           fromCity: ['',  [Validators.required]],
           toCity: ['',  [Validators.required]]
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

  uploadRequest(){
    // get confirm box for confirmation
      this.setTimer();
      this.a= true;
      
   
  }

  getData(){
    let toCity = this.studentAddForm.value.toCity;
    if(toCity === 'Pune'){
      this.eligibilityData = {
        flight: 5000,
        food: 250,
        withBills: 300,
        ope: 250
      };
    } else if(toCity === 'Bangalore'){
      this.eligibilityData = {
        flight: 6000,
        food: 350,
        withBills: 360,
        ope: 450
      };
    } else {
      this.eligibilityData = {
        flight: 7000,
        food: 230,
        withBills: 330,
        ope: 210
      };
    }
  }

}
