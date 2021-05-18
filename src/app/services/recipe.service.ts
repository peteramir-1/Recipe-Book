import { recipeModel } from './../models/recipe.model';
import { ShoppingListService } from './shopping-list.service';
import { ingredient } from '../models/ingredient.model';
import { Injectable } from '@angular/core';

@Injectable({
	// tslint:disable-next-line: indent
	providedIn: 'root',
})
export class RecipeService {
  recipes: recipeModel[] = [
		new recipeModel(
			'A recipe name',
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
			'A recipe name',
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
			'A recipe name',
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
			'A recipe name',
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
			'A recipe name',
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
			'A recipe name',
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
			'A recipe name',
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
			'A recipe name',
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
			'A recipe name',
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

  constructor(private shoppingListService: ShoppingListService) { }

	selectIng(ings: ingredient[]): void {
		this.shoppingListService.addRecipeIng(ings);
  }

  addRecipe(recipe: recipeModel): void {
    this.recipes.push(recipe);
  }

  editRecipe(recipe: recipeModel, index: number): void {
    this.recipes[index] = recipe;
  }

  deleteRecipe(index: number): void {
    this.recipes.splice(index, 1);
  }

}
