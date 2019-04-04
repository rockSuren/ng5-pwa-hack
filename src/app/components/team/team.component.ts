import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teamLst = [
    {
      id: 722796,
      name: 'Arun Gopala Krishnan K R'
    },
    {
      id: 64018,
      name: 'Sribalaji S'
    },
    {
      id: 727925,
      name: 'Rathi Velusamy'
    },
    {
      id: 138424,
      name: 'Balaji Ashok Kumar'
    },
    {
      id: 672368,
      name: 'Ponnusamy C'
    },
    {
      id: 753731,
      name: 'M.Surendar'
    },
    {
      id: 714258,
      name: 'Sree Vasthava Kolati'
    },
    {
      id: 737284,
      name: 'Ahalya M'
    },
    {
      id:763052,
      name:'Veera BhanuPrakash Reddy'
    },
    {
      id:701204,
      name: 'Cyril Franklin'
    },
    {
      id:660761 ,
      name: 'Sriram Mahadevan'
    },
    {
      id:737351  ,
      name:'Dayashri Durairaj'
    },
    {
      id:762903,
      name:'Vignesh Ganesan'
    },
    {
      id:653975,
      name:'Aadhavan Mani'
    },
    {
      id:763095,
      name:'Kalaivani Kumarasamy'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
