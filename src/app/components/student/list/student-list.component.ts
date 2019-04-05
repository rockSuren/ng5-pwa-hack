/**
 * Created By : Inf-Wm Account
 */

 import { Component, OnInit } from '@angular/core';
 import { ToastrService } from 'ngx-toastr';

 // Services
 import { StudentService } from '../../../services/student/student.service';
 import { routerTransition } from '../../../services/config/config.service';

 import { NotifyService } from '../../../services/notify/notify.service';

 @Component({
 	selector: 'app-student-list',
 	templateUrl: './student-list.component.html',
 	styleUrls: ['./student-list.component.css'],
 	animations: [routerTransition()],
 	host: {'[@routerTransition]': ''}
 })

 export class StudentListComponent implements OnInit {
 	studentList:any;
	 studentListData:any;
	 
	 requests: any;
	 constructor(private studentService:StudentService,private toastr: ToastrService,
		private notifyService: NotifyService) { }
 	// Call student list function on page load 
 	ngOnInit() {
 		this.getStudentList();
		 this.getRequests();
 	}

	 getRequests() {
		 this.notifyService.fetchAhd().subscribe(
			 data => { this.requests = data},
			 err => console.error(err),
			() => console.log('done loading hardware')
		   );
	 }

 	// Get student list from services
 	getStudentList(){
 		let studentList = this.studentService.getAllStudents();
 		this.success(studentList)
 	}

 	// Get student list success
 	success(data){
 		this.studentListData = data.data;
 		for (var i = 0; i < this.studentListData.length; i++) {
 			this.studentListData[i].name = this.studentListData[i].first_name +' '+ this.studentListData[i].last_name;
 		}
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
 			this.getStudentList();
 		}
 	}

 	// Approve a request with its index
 	approveRequest(index:number){
 		// get confirm box for confirmation
 		let r = confirm("Do you want to approve the iTravel request?");
 		if (r == true) {
 			let studentDelete = this.studentService.deleteStudent(index);
 			if(studentDelete) {
 				this.toastr.success("Success", "iTravel Request Approved");
 			} 
 			this.getStudentList();
 		}
 	}
 }
/**
 * Created By : Inf-Wm Account
 */
