import { Injectable } from '@angular/core';
import { ingredient } from '../models/ingredient.model';

@Injectable({
	providedIn: 'root',
})

export class ShoppingListService {

  ingredients: ingredient[] = [
		new ingredient('Apples', '5'),
		new ingredient('Tomatos', '10'),
	];

	constructor() {}

	addIng(name: string, number: string) {
		this.ingredients.push(new ingredient(name, number));
	}

  addRecipeIng(ings: ingredient[]) {
      this.ingredients.push(...ings);
  }

  addOneRecipeIng(ing: ingredient) {
    this.addIng(ing.name, ing.amount);
  }

  clear() {
    this.ingredients.splice(0, this.ingredients.length)
  }
}
