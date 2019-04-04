/**
 * Created By : Inf-Wm Account
 */

import { Injectable }     from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot }    from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService implements CanActivate {

	constructor(private router: Router,private user: UserService) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		let url: string = state.url;

		if (localStorage.getItem('userData')) {
			this.user.userType = localStorage.getItem('userType') === "" ? "": localStorage.getItem('userType');
			return true;
		}else {
			this.router.navigate(['/login']);
			return false;
		}
	}
}

/**
 * Created By : Inf-Wm Account
 */