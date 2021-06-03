import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

// *------- Services -------*/
import { ShoppingListService } from './../services/shopping-list.service';

// *------- Models -------*/
import { ingredient } from '../models/ingredient.model';

// *------- Fa Icons -------*/
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
	ingredients: ingredient[];

	// *------- Fa Icons -------*/
	readonly faClose = faTimes;

	constructor(
		private route: ActivatedRoute,
		private shoppingListService: ShoppingListService
	) {}

	ngOnInit(): void {
		this.route.data.subscribe((data: Data) => {
			this.ingredients = data.ingredients;
		});
	}

	/**
	 * ? delete an ingredient from shopping list
	 *
	 * @param {number} i
	 * @memberof ShoppingListComponent
	 */
	deleteIng(i: number): void {
		this.shoppingListService.deleteAnIng(i);
	}
}
