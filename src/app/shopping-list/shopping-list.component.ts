// Angular imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

// Services
import { ShoppingListService } from './../services/shopping-list.service';

// Models
import { ingredient } from '../models/ingredient.model';

// ICONS
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
	// Properties
  ingredients: ingredient[];

  // Icons
  readonly faClose = faTimes ;

	constructor(
      private route: ActivatedRoute,
      private shoppingListService: ShoppingListService,
    ) {}

	ngOnInit(): void {

    this.route.data.subscribe((data: Data) => {
      this.ingredients = data.ingredients;
    });
  }

  // Delete ingredient from the Shopping List
  deleteIng(i: number): void {
    this.ingredients.splice(i, 1);
  }
}
