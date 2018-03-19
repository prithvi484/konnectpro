import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'search'
})
export class SearchPipe implements PipeTransform {

	transform(items: Array<any>, searchText: string): Array<any> {
		if (!items) {
			return [];
		}
		if (!searchText) {
			return items;
		}
		const keys = Object.keys(items[0]);
		return items.filter((item) => {
			return keys.some((key) => {
				return item[key].toString().toLowerCase().includes(searchText.toLowerCase());
			});
		});
	}
}
