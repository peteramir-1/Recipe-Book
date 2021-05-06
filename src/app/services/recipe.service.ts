import { recipeModel } from './../models/recipe.model';
import { RecipeDatabase } from './../Database/DatabaseFile';
import { ShoppingListService } from './shopping-list.service';
import { ingredient } from '../models/shoppingList.model';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class RecipeService {
  recipes;

  constructor(
    private shoppingListService: ShoppingListService,
    private RecipeDatabase: RecipeDatabase
    ) {
      this.recipes = this.RecipeDatabase.recipes;
    }

	selectIng(ings: ingredient[]) {
		this.shoppingListService.addRecipeIng(ings);
  }

  addRecipe(recipe: recipeModel) {
    this.RecipeDatabase.recipes.push(recipe);
    this.recipes = this.RecipeDatabase.recipes
  }

  editRecipe(recipe: recipeModel, index: number) {
    this.recipes[index] = recipe;
  }

}
