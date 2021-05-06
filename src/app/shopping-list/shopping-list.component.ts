import { Component, OnDestroy, OnInit } from '@angular/core';

import { ingredient } from '../models/shoppingList.model';
import { ShoppingListService } from './../services/shopping-list.service';

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
	ingredients: ingredient[];

	constructor(private shoppingListService: ShoppingListService) {}

	ngOnInit(): void {
    this.ingredients = this.shoppingListService.ingredients;
  }

  deleteIng(i: number) {
    this.ingredients.splice(i, 1)
  }
}
