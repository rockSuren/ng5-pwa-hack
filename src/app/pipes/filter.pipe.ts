import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filter'
})
export class FilterPipe implements PipeTransform {

	transform(value: any, args?: any): any {
		if (args != undefined && args != null && args != '') {
			return value.filter(data =>
				 ((data.name.toLowerCase()).indexOf(args.toLowerCase()) > -1) 
				 || (data.id.toString().indexOf(args) > -1 )|| (data.phone.toString().indexOf(args) > -1));
		}
		return value;
	}

}

@Pipe({
	name: 'filterNotification'
})
export class FilterPipeNotification implements PipeTransform {

	transform(value: any, args?: any): any {
		if (args != undefined && args != null && args != '') {
			return value.filter(data => (data.type.toLowerCase()).indexOf(args.toLowerCase()) > -1);
		}
		return value;
	}

}