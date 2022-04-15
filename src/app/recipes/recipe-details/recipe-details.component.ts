import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Data, ParamMap, Router } from '@angular/router';

// *------- Services -------*/
import { RecipeService } from './../../services/recipe.service';

// *------- Models -------*/
import { recipeModel } from './../../models/recipe.model';
import { ingredient } from '../../models/ingredient.model';

// *------- Fa Icons -------*/
import {
  faArrowDown,
  faPlus,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  recipeSelected: recipeModel;
  recipeIndex: number;

  // *------- Fa Icons -------*/
  readonly arrow = faArrowDown;
  readonly plusIcon = faPlus;
  readonly cartIcon = faShoppingCart;

  // *------- States -------*/
  // todo  control states from one place in the program
  openDropdown = false;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.recipeSelected = data.recipe;
    });

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.recipeIndex = +params.get('id') - 1;
    });
  }

  /**
   * ? used to add an ingredients to shopping list
   *
   * @param ing
   * @memberof RecipeDetailsComponent
   */
  addIngredient(ing: ingredient): void {
    this.recipeService.addRecipeIng([ing]); // Send only one ingredient to shoppinglist component
  }

  addAllIngredients(): void {
    this.recipeService.addRecipeIng(this.recipeSelected.ingredients); // Send Ingredients of the recipe to shoppinglist component
  }
}
