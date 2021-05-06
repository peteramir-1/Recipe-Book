import { ShoppingListService } from './../../services/shopping-list.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'app-shopping-edit',
	templateUrl: './shopping-edit.component.html',
	styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
	@ViewChild('ing_name') ing_name: ElementRef;
	@ViewChild('ing_amount') ing_amount: ElementRef;

	constructor(private shoppingListService: ShoppingListService) {}

	ngOnInit(): void {}

	addIng() {
		this.shoppingListService.addIng(
			this.ing_name.nativeElement.value,
			this.ing_amount.nativeElement.value
		);
	}
}
