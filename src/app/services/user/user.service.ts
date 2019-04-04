/**
 * Created By : Inf-Wm Account
 */

import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

	constructor() { }
	userType:string="";
	doLogin(data){
		if (data.email == "manager@infosys.com" && data.password == "manager123") {
			this.userType = 'manager';
			return {
				code : 200,
				message : "Login Successful",
				userType: this.userType,
				data : data
			};
		}
		else if (data.email == "employee@infosys.com" && data.password == "employee123") {
			this.userType = "employee";
			return {
				code : 200,
				message : "Login Successful",
				data : data,
				userType: this.userType,
			};
		}
		else if (data.email == "agent@infosys.com" && data.password == "agent123") {
			this.userType = "agent";
			return {
				code : 200,
				message : "Login Successful",
				data : data,
				userType: this.userType,
			};
		}else{
			this.userType = "";
			return {
				code : 503,
				message : "Invalid Credentials",
				data : null
			};
		}
	}

	// doRegister(data){
		// 	return this.http.post('user-add.php',data);	
		// }
	}

/**
 * Created By : Inf-Wm Account
 */