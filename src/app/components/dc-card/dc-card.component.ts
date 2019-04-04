import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dc-card',
  templateUrl: './dc-card.component.html',
  styleUrls: ['./dc-card.component.css']
})
export class DcCardComponent implements OnInit {

  vidName: string = "";

  constructor() { }

  ngOnInit() {
}
dcs=[{value:'CHN-M',viewValue:'Chennai Mcity'},{value:'PUNE',viewValue:'Pune'},{value:'BLR',viewValue:'Bangalore'},{value:'BEN',viewValue:'Bentonville'}]

nearMeLst = [{value:1,viewValue:'Restaurants'},{value:2,viewValue:'Pharmacy'},{value:3,viewValue:'Bank/ATM'}];

selecteddc:string="CHN-M";
lightbox_open(event) {
  let lightBoxVideo = <HTMLVideoElement> document.getElementById("VisaChipCardVideo");
  document.body.scrollTop = 0;
  if(event.value === 1){
    lightBoxVideo.src = "assets/Hotels.MP4";
  } else if(event.value === 2){
    lightBoxVideo.src = "assets/Pharmacy.MOV";
  } else {
    lightBoxVideo.src = "assets/Banks.MP4";
  }
  lightBoxVideo.height = 500;
  lightBoxVideo.width = 250;
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
}
