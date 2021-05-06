import { ingredient } from './../../models/shoppingList.model';
import { ActivatedRoute, Data, ParamMap, Params, Router } from '@angular/router';
import { recipeModel } from './../../models/recipe.model';
import { RecipeService } from './../../services/recipe.service';
import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-recipe-details',
	templateUrl: './recipe-details.component.html',
	styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
	recipeSelected: recipeModel;
  recipeIndex: number;

  // FontAwsome Icons
  cartIcon = faShoppingCart;

	constructor(
      private recipeService: RecipeService,
      private router: Router,
      private route: ActivatedRoute
    ) {}

	ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.recipeSelected = data['recipe']
    });

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.recipeIndex = (+params.get('id')) - 1;
    });
  }

  // Function to send only one ingredient to shoppinglist component
	addIngredient(ing: ingredient) {
		this.recipeService.selectIng([ing]);
	}

  deleteRecipe() {
    this.recipeService.deleteRecipe(this.recipeIndex);
    this.router.navigate(['recipes']);
  }

  // Funtion to send Ingredients of the recipe to shoppinglist component
	addAllIngredients() {
		this.recipeService.selectIng(this.recipeSelected.ingredients);
	}
}
