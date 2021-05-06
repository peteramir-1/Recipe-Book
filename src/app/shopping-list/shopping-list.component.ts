import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ingredient } from '../models/shoppingList.model';
import { ShoppingListService } from './../services/shopping-list.service';

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredientsObs: Subscription;
	ingredients: ingredient[];

	constructor(private shoppingListService: ShoppingListService) {}

	ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIng();
    this.ingredientsObs =	this.shoppingListService.ingChanged
      .subscribe((ingredients: ingredient[]) => {
        this.ingredients = ingredients;
			}
    );
  }

  ngOnDestroy(): void {
    this.ingredientsObs.unsubscribe();
  }
}
