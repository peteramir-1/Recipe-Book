// Angular imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, ParamMap, Router } from '@angular/router';

// Services
import { RecipeService } from './../../services/recipe.service';

// Models
import { recipeModel } from './../../models/recipe.model';
import { ingredient } from '../../models/ingredient.model';

// Icons imports
import { faArrowDown, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-recipe-details',
	templateUrl: './recipe-details.component.html',
	styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
	// Properties
  recipeSelected: recipeModel;
  recipeIndex: number;

  // State
  openDropdown = false;

  // Icons
  readonly arrow = faArrowDown;
  readonly plusIcon = faPlus;
  readonly cartIcon = faShoppingCart;

	constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) {}

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

  // Funtion to send Ingredients of the recipe to shoppinglist component
  addAllIngredients() {
    this.recipeService.selectIng(this.recipeSelected.ingredients);
  }

  // Function deletes the selected recipe
  deleteRecipe() {
    this.recipeService.deleteRecipe(this.recipeIndex);
    this.router.navigate(['recipes']);
  }

  // Open/Close Dropdown
  closeDropdown() {
    this.openDropdown = false;
  }
}
