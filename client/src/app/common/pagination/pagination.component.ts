import { Constants } from './../../shared/constants/constants';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
	selector: 'app-pagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
	pages: number[] = [];
	perpage = 10;
	paginationCtrls = {
		next: false,
		prev: false,
		last: false,
		first: false
	};

	activePageIndex = 0;

	constructor() { }
	@Input() count: number;

	@Output() pageNumber: EventEmitter<number> = new EventEmitter<number>();
	@Output() recordsPerPage: EventEmitter<number> = new EventEmitter<number>();
	ngOnInit() {
		this.createPagination();
	}

	createPagination() {
		const len: number = Math.floor(this.count / Constants.RECORDSPERPAGE);
		const pages = new Array(len);
		this.pages = Array.from(pages, (x, i) => i + 1);
		this.goToFirstPage();
	}

	goToNextPage(): void {
		const index = this.activePageIndex;
		const len = this.pages.length;
		const nextIndex = index === (len - 1) ? index : index + 1;
		this.sendPageNo(nextIndex);
	}

	goToPreviousPage(): void {
		const index = this.activePageIndex;
		const nextIndex: number = index === 0 ? index : index - 1;
		this.sendPageNo(nextIndex);
	}

	goToLastPage(): void {
		this.sendPageNo(this.pages.length - 1);
	}

	goToFirstPage(): void {
		this.sendPageNo(0);
	}


	sendPageNo(nextIndex: number): void {

		if (this.activePageIndex === nextIndex) {
			return;
		}

		this.activePageIndex = nextIndex;
		// this.calculatePageCtrlStates();
		const pageNumber = this.activePageIndex + 1;
		this.pageNumber.emit(pageNumber);
	}
	sendPerPage() {
		console.log(this.perpage);
		const recordsPerPage = this.perpage;
		this.recordsPerPage.emit(recordsPerPage);
	}

	calculatePageCtrlStates(): void {
		const { length } = this.pages;
		const index = this.activePageIndex;

		console.log(length, index);
		/**
		 * If Index is 0 means.. if the active element is
		 * first one disable prev and gotoFirst ctrl...
		 */
		if (index === 0) {
			this.paginationCtrls = {
				next: false,
				prev: true,
				last: false,
				first: true
			};
		}

		/**
		 * If Index is equals to length means.. if the active element is
		 * last one disable next and gotoLast ctrl...
		 */
		if (index === length - 1) {
			this.paginationCtrls = {
				next: true,
				prev: false,
				last: true,
				first: false
			};
		}

		/**
		 * If itsn't in the first or in last... then enable all controlls..
		 */
		if ((index !== 0) && (index !== length - 1)) {
			Object.keys(this.paginationCtrls).forEach(key => this.paginationCtrls[key] = false);
		}

		/**
		 * If Only One Page Exist , Disable All Controlls...
		 */
		if (length === 1) {
			Object.keys(this.paginationCtrls).forEach(key => this.paginationCtrls[key] = true);
		}



	}
}
