import { ingredient } from './../../models/shoppingList.model';
import { ActivatedRoute, Data, Params } from '@angular/router';
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

  // FontAwsome Icons
  cartIcon = faShoppingCart;


	constructor(private recipeService: RecipeService, private route: ActivatedRoute) {}

	ngOnInit(): void {
    /*
      Observable Checks for any id Params changes
      in the url and fetch data from the service
      according to query params
    */
    this.route.data.subscribe((data: Data) => {
      this.recipeSelected = data['recipe']
    })
    }

  // Function to send only one ingredient to shoppinglist component
	addIngredient(ing: ingredient) {
		this.recipeService.selectIng([ing]);
	}

  // Funtion to send Ingredients of the recipe to shoppinglist component
	addAllIngredients() {
		this.recipeService.selectIng(this.recipeSelected.ingredients);
	}
}
