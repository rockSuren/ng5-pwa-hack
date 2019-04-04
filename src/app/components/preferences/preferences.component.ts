import { Component, OnInit } from '@angular/core';
import{ FormBuilder,FormGroup,FormControl,FormGroupDirective,NgForm,Validators} from '@angular/forms';
import { routerTransition } from '../../services/config/config.service';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css'],
  animations: [routerTransition()],
 	host: {'[@routerTransition]': ''}
})
export class PreferencesComponent implements OnInit {
  timer:any;
  showTimer:boolean = false;
  a:boolean = false;
  private studentAddForm : FormGroup;
  city:string[] = ["Royal Grand", "Royal Grand Palace", "Grand", "Grand Hotel", "No preference"];
  fromCity:string[] = ['Ola', 'Uber', 'No preference'];
  cab: string[] = ['Yes', 'No'];
  onward: string[] = ['Before 6AM','6AM-12PM','12PM-6PM','After 6PM'];
  meal: string[] = ['Asian Vegetarian', 'Hindu Vegetarian', 'Non Vegetarian', 'No preference'];
  seat: string[] = ['Aisle', 'Window', 'No preference'];
  eligibilityData:{} = null;

  constructor(private formBuilder: FormBuilder) { 
       this.studentAddForm = this.formBuilder.group({
           fromCity: ['No preference',  [Validators.required]],
           toCity: ['',  [Validators.required]],
           onward: ['',  [Validators.required]],
           return: ['',  [Validators.required]],
           meal: ['',  [Validators.required]],
           seat: ['',  [Validators.required]],
           cab: ['No',  [Validators.required]],           
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

  getData(){
    this.setTimer();
    this.a= true;
  }

}
