import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notificationsList = [
    {
      message: "Chennai Fusion Food Court will remain closed today.",type:"alert"
    },
    {
      message: "Chennai will be on holiday for Pongal on 14th Jan 2019.",type:"info"
    },
    {
      message: "ECC Stay entrance is under maintenance, take caution.",type:"warning"
    }
  ];

  alert:boolean=false;
  warn:boolean=false;
  info:boolean=false;
  filterString:string='xx';

  constructor() { }

  ngOnInit() {
  }
  setAlert(){
    this.filterString='alert';
  }
  setWarn(){
    this.filterString='warning';
  }
  setInfo(){
    this.filterString='info';
  }

}
