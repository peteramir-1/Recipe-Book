import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'app-error-handle',
	templateUrl: './error-handle.component.html',
	styleUrls: ['./error-handle.component.scss'],
})
export class ErrorHandleComponent implements OnInit {
	errorNum: number;

	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.route.paramMap.subscribe((param: Params) => {
			this.errorNum = +param.get('num');
		});
	}

	error() {
		switch (this.errorNum) {
			case 404:
				return '../../assets/error-404.png';
			default:
				return '../../assets/error-404.png';
		}
	}
}
