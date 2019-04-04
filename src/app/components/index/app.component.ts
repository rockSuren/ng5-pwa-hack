/**
 * Created By : Inf-Wm Account
 */

import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent {
	title = 'Integrated iTravel System';

	// Add few students for initial listing
	studentsList = [
	{	
		id : 12345,
		first_name : "Ram Gopal",
		last_name : "Software Request",
		email : "Chrome"		
	},
	{
		id : 23456,
		first_name : "Rajesh",
		last_name : "Software Request",
		email : "Outlook"		
	},
	{
		id : 56789,
		first_name : "Vincent",
		last_name : "Software Request",
		email : "One Drive"		
	}
	];

	constructor() {
		// Save students to localStorage
		localStorage.setItem('students', JSON.stringify(this.studentsList));
	}
}

/**
 * Created By : Inf-Wm Account
 */
