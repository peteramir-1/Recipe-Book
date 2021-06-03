import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// *------- Model -------*/
import { recipeModel } from './../models/recipe.model';
import { ingredient } from '../models/ingredient.model';

// *------- Services -------*/
import { ShoppingListService } from './shopping-list.service';
@Injectable({
	providedIn: 'root',
})
export class RecipeService {
	initiateDetailDrawer = new Subject<boolean>();
	/**
	 *
	 * ? Recipe Database
	 * @type {recipeModel[]}
	 * @memberof RecipeService
	 */
	recipes: recipeModel[] = [
		new recipeModel(
			'lorem ipsum 1',
			'Aliqua deserunt exercitation fugiat incididunt eiusmod elit ut veniam quis aliquip consequat est qui Lorem.',
			'Mollit ad deserunt aliqua minim. Elit cillum fugiat ea veniam. Eiusmod incididunt consequat ullamco sit aute incididunt magna aliquip reprehenderit quis mollit in ipsum ex. Consectetur ad tempor aute ullamco officia. Et veniam culpa duis in consectetur do Lorem ex ullamco. Exercitation et nisi consequat elit ea ea cupidatat consequat laboris id veniam commodo consectetur.',
			'../../assets/recipe-pic.jpg',
			[
				new ingredient('Large Ripe Heirloom Tomatoes', '2'),
				new ingredient('Large Red Onion', '1'),
				new ingredient('Sea Salt', '1'),
				new ingredient('Freshly ground black pepper', '1'),
				new ingredient('Olive Oil', '1'),
				new ingredient('Ground Beef', '2.5'),
				new ingredient('Kosher salt', '1'),
				new ingredient('slices American cheese', '6'),
				new ingredient('Leaf or Romaine Lettuce Leaves', '6'),
				new ingredient('Ketchup', '1'),
				new ingredient('Mayonnaise', '1'),
				new ingredient('Mustard', '1'),
				new ingredient('Telera Roll', '1'),
			]
		),
		new recipeModel(
			'lorem ipsum 2',
			'Aliqua deserunt exercitation fugiat incididunt eiusmod elit ut veniam quis aliquip consequat est qui Lorem.',
			'Mollit ad deserunt aliqua minim. Elit cillum fugiat ea veniam. Eiusmod incididunt consequat ullamco sit aute incididunt magna aliquip reprehenderit quis mollit in ipsum ex. Consectetur ad tempor aute ullamco officia. Et veniam culpa duis in consectetur do Lorem ex ullamco. Exercitation et nisi consequat elit ea ea cupidatat consequat laboris id veniam commodo consectetur.',
			'../../assets/recipe-pic.jpg',
			[
				new ingredient('Large Ripe Heirloom Tomatoes', '2'),
				new ingredient('Large Red Onion', '1'),
				new ingredient('Sea Salt', '1'),
				new ingredient('Freshly ground black pepper', '1'),
				new ingredient('Olive Oil', '1'),
				new ingredient('Ground Beef', '2.5'),
				new ingredient('Kosher salt', '1'),
				new ingredient('slices American cheese', '6'),
				new ingredient('Leaf or Romaine Lettuce Leaves', '6'),
				new ingredient('Ketchup', '1'),
				new ingredient('Mayonnaise', '1'),
				new ingredient('Mustard', '1'),
				new ingredient('Telera Roll', '1'),
			]
		),
		new recipeModel(
			'lorem ipsum 3',
			'Aliqua deserunt exercitation fugiat incididunt eiusmod elit ut veniam quis aliquip consequat est qui Lorem.',
			'Mollit ad deserunt aliqua minim. Elit cillum fugiat ea veniam. Eiusmod incididunt consequat ullamco sit aute incididunt magna aliquip reprehenderit quis mollit in ipsum ex. Consectetur ad tempor aute ullamco officia. Et veniam culpa duis in consectetur do Lorem ex ullamco. Exercitation et nisi consequat elit ea ea cupidatat consequat laboris id veniam commodo consectetur.',
			'../../assets/recipe-pic.jpg',
			[
				new ingredient('Large Ripe Heirloom Tomatoes', '2'),
				new ingredient('Large Red Onion', '1'),
				new ingredient('Sea Salt', '1'),
				new ingredient('Freshly ground black pepper', '1'),
				new ingredient('Olive Oil', '1'),
				new ingredient('Ground Beef', '2.5'),
				new ingredient('Kosher salt', '1'),
				new ingredient('slices American cheese', '6'),
				new ingredient('Leaf or Romaine Lettuce Leaves', '6'),
				new ingredient('Ketchup', '1'),
				new ingredient('Mayonnaise', '1'),
				new ingredient('Mustard', '1'),
				new ingredient('Telera Roll', '1'),
			]
		),
		new recipeModel(
			'lorem ipsum 4',
			'Aliqua deserunt exercitation fugiat incididunt eiusmod elit ut veniam quis aliquip consequat est qui Lorem.',
			'Mollit ad deserunt aliqua minim. Elit cillum fugiat ea veniam. Eiusmod incididunt consequat ullamco sit aute incididunt magna aliquip reprehenderit quis mollit in ipsum ex. Consectetur ad tempor aute ullamco officia. Et veniam culpa duis in consectetur do Lorem ex ullamco. Exercitation et nisi consequat elit ea ea cupidatat consequat laboris id veniam commodo consectetur.',
			'../../assets/recipe-pic.jpg',
			[
				new ingredient('Large Ripe Heirloom Tomatoes', '2'),
				new ingredient('Large Red Onion', '1'),
				new ingredient('Sea Salt', '1'),
				new ingredient('Freshly ground black pepper', '1'),
				new ingredient('Olive Oil', '1'),
				new ingredient('Ground Beef', '2.5'),
				new ingredient('Kosher salt', '1'),
				new ingredient('slices American cheese', '6'),
				new ingredient('Leaf or Romaine Lettuce Leaves', '6'),
				new ingredient('Ketchup', '1'),
				new ingredient('Mayonnaise', '1'),
				new ingredient('Mustard', '1'),
				new ingredient('Telera Roll', '1'),
			]
		),
		new recipeModel(
			'lorem ipsum 5',
			'Aliqua deserunt exercitation fugiat incididunt eiusmod elit ut veniam quis aliquip consequat est qui Lorem.',
			'Mollit ad deserunt aliqua minim. Elit cillum fugiat ea veniam. Eiusmod incididunt consequat ullamco sit aute incididunt magna aliquip reprehenderit quis mollit in ipsum ex. Consectetur ad tempor aute ullamco officia. Et veniam culpa duis in consectetur do Lorem ex ullamco. Exercitation et nisi consequat elit ea ea cupidatat consequat laboris id veniam commodo consectetur.',
			'../../assets/recipe-pic.jpg',
			[
				new ingredient('Large Ripe Heirloom Tomatoes', '2'),
				new ingredient('Large Red Onion', '1'),
				new ingredient('Sea Salt', '1'),
				new ingredient('Freshly ground black pepper', '1'),
				new ingredient('Olive Oil', '1'),
				new ingredient('Ground Beef', '2.5'),
				new ingredient('Kosher salt', '1'),
				new ingredient('slices American cheese', '6'),
				new ingredient('Leaf or Romaine Lettuce Leaves', '6'),
				new ingredient('Ketchup', '1'),
				new ingredient('Mayonnaise', '1'),
				new ingredient('Mustard', '1'),
				new ingredient('Telera Roll', '1'),
			]
		),
		new recipeModel(
			'lorem ipsum 6',
			'Aliqua deserunt exercitation fugiat incididunt eiusmod elit ut veniam quis aliquip consequat est qui Lorem.',
			'Mollit ad deserunt aliqua minim. Elit cillum fugiat ea veniam. Eiusmod incididunt consequat ullamco sit aute incididunt magna aliquip reprehenderit quis mollit in ipsum ex. Consectetur ad tempor aute ullamco officia. Et veniam culpa duis in consectetur do Lorem ex ullamco. Exercitation et nisi consequat elit ea ea cupidatat consequat laboris id veniam commodo consectetur.',
			'../../assets/recipe-pic.jpg',
			[
				new ingredient('Large Ripe Heirloom Tomatoes', '2'),
				new ingredient('Large Red Onion', '1'),
				new ingredient('Sea Salt', '1'),
				new ingredient('Freshly ground black pepper', '1'),
				new ingredient('Olive Oil', '1'),
				new ingredient('Ground Beef', '2.5'),
				new ingredient('Kosher salt', '1'),
				new ingredient('slices American cheese', '6'),
				new ingredient('Leaf or Romaine Lettuce Leaves', '6'),
				new ingredient('Ketchup', '1'),
				new ingredient('Mayonnaise', '1'),
				new ingredient('Mustard', '1'),
				new ingredient('Telera Roll', '1'),
			]
		),
		new recipeModel(
			'lorem ipsum 7',
			'Aliqua deserunt exercitation fugiat incididunt eiusmod elit ut veniam quis aliquip consequat est qui Lorem.',
			'Mollit ad deserunt aliqua minim. Elit cillum fugiat ea veniam. Eiusmod incididunt consequat ullamco sit aute incididunt magna aliquip reprehenderit quis mollit in ipsum ex. Consectetur ad tempor aute ullamco officia. Et veniam culpa duis in consectetur do Lorem ex ullamco. Exercitation et nisi consequat elit ea ea cupidatat consequat laboris id veniam commodo consectetur.',
			'../../assets/recipe-pic.jpg',
			[
				new ingredient('Large Ripe Heirloom Tomatoes', '2'),
				new ingredient('Large Red Onion', '1'),
				new ingredient('Sea Salt', '1'),
				new ingredient('Freshly ground black pepper', '1'),
				new ingredient('Olive Oil', '1'),
				new ingredient('Ground Beef', '2.5'),
				new ingredient('Kosher salt', '1'),
				new ingredient('slices American cheese', '6'),
				new ingredient('Leaf or Romaine Lettuce Leaves', '6'),
				new ingredient('Ketchup', '1'),
				new ingredient('Mayonnaise', '1'),
				new ingredient('Mustard', '1'),
				new ingredient('Telera Roll', '1'),
			]
		),
		new recipeModel(
			'lorem ipsum 8',
			'Aliqua deserunt exercitation fugiat incididunt eiusmod elit ut veniam quis aliquip consequat est qui Lorem.',
			'Mollit ad deserunt aliqua minim. Elit cillum fugiat ea veniam. Eiusmod incididunt consequat ullamco sit aute incididunt magna aliquip reprehenderit quis mollit in ipsum ex. Consectetur ad tempor aute ullamco officia. Et veniam culpa duis in consectetur do Lorem ex ullamco. Exercitation et nisi consequat elit ea ea cupidatat consequat laboris id veniam commodo consectetur.',
			'../../assets/recipe-pic.jpg',
			[
				new ingredient('Large Ripe Heirloom Tomatoes', '2'),
				new ingredient('Large Red Onion', '1'),
				new ingredient('Sea Salt', '1'),
				new ingredient('Freshly ground black pepper', '1'),
				new ingredient('Olive Oil', '1'),
				new ingredient('Ground Beef', '2.5'),
				new ingredient('Kosher salt', '1'),
				new ingredient('slices American cheese', '6'),
				new ingredient('Leaf or Romaine Lettuce Leaves', '6'),
				new ingredient('Ketchup', '1'),
				new ingredient('Mayonnaise', '1'),
				new ingredient('Mustard', '1'),
				new ingredient('Telera Roll', '1'),
			]
		),
		new recipeModel(
			'lorem ipsum 9',
			'Aliqua deserunt exercitation fugiat incididunt eiusmod elit ut veniam quis aliquip consequat est qui Lorem.',
			'Mollit ad deserunt aliqua minim. Elit cillum fugiat ea veniam. Eiusmod incididunt consequat ullamco sit aute incididunt magna aliquip reprehenderit quis mollit in ipsum ex. Consectetur ad tempor aute ullamco officia. Et veniam culpa duis in consectetur do Lorem ex ullamco. Exercitation et nisi consequat elit ea ea cupidatat consequat laboris id veniam commodo consectetur.',
			'../../assets/recipe-pic.jpg',
			[
				new ingredient('Large Ripe Heirloom Tomatoes', '2'),
				new ingredient('Large Red Onion', '1'),
				new ingredient('Sea Salt', '1'),
				new ingredient('Freshly ground black pepper', '1'),
				new ingredient('Olive Oil', '1'),
				new ingredient('Ground Beef', '2.5'),
				new ingredient('Kosher salt', '1'),
				new ingredient('slices American cheese', '6'),
				new ingredient('Leaf or Romaine Lettuce Leaves', '6'),
				new ingredient('Ketchup', '1'),
				new ingredient('Mayonnaise', '1'),
				new ingredient('Mustard', '1'),
				new ingredient('Telera Roll', '1'),
			]
		),
	];

	constructor(private shoppingListService: ShoppingListService) {}

	/**
	 *
	 * ? it adds an ingredient into the shopping list
	 * @param {ingredient[]} ings
	 * @memberof RecipeService
	 */
	addRecipeIng(ings: ingredient[]): void {
		this.shoppingListService.addRecipeIng(ings);
	}

	/**
	 *
	 * ? it used to add a recipe to Database
	 * @param {recipeModel} recipe
	 * @memberof RecipeService
	 */
	addRecipe(recipe: recipeModel): void {
		this.recipes.push(recipe);
	}

	/**
	 *
	 * ? it used to edit the information of a recipe in the database
	 * @param {recipeModel} recipe
	 * @param {number} index
	 * @memberof RecipeService
	 */
	editRecipe(recipe: recipeModel, index: number): void {
		this.recipes[index] = recipe;
	}

	/**
	 *
	 * ? used to delete a recipe from database
	 * @param {number} index
	 * @memberof RecipeService
	 */
	deleteRecipe(index: number): void {
		this.recipes.splice(index, 1);
	}
}
