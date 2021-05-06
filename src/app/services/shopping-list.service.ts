import { Injectable } from '@angular/core';
import { ingredient } from './../models/shoppingList.model';

import { Subject } from 'rxjs';
@Injectable({
	providedIn: 'root',
})

export class ShoppingListService {
	ingChanged = new Subject<ingredient[]>();

  ingredients: ingredient[] = [
		new ingredient('Apples', '5'),
		new ingredient('Tomatos', '10'),
	];

	constructor() {}

  getIng() {
    return this.ingredients.slice();
  }

	addIng(name: string, number: string) {
		this.ingredients.push(new ingredient(name, number));
    this.ingChanged.next(this.ingredients.slice());
	}

  addRecipeIng(ings: ingredient[]) {
      this.ingredients.push(...ings);
      this.ingChanged.next(this.ingredients.slice())
  }

  addOneRecipeIng(ing: ingredient) {
    this.addIng(ing.name, ing.amount);
  }
}
