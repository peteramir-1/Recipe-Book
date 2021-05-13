// Angular imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

// Services
import { ShoppingListService } from './../services/shopping-list.service';

// Models
import { ingredient } from '../models/ingredient.model';

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
	// Properties
  ingredients: ingredient[];

	constructor(private route: ActivatedRoute, private shoppingListService: ShoppingListService) {}

	ngOnInit(): void {
    this.ingredients = this.shoppingListService.ingredients;
  }

  // Delete ingredient from the Shopping List
  deleteIng(i: number) {
    this.ingredients.splice(i, 1)
  }
}
