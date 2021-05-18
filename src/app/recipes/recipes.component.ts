// Angular imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, ParamMap } from '@angular/router';

// Models
import { recipeModel } from '../models/recipe.model';

@Component({
	selector: 'app-recipes',
	templateUrl: './recipes.component.html',
	styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  // Properties
  recipes: recipeModel[];

  // State
  sidebarState = false;

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    // recive component DATA
    this.route.data.subscribe((data: Data) => {
      this.recipes = data.recipes;
    });

    // Change the state of the sidebar according to the route..
    this.route.queryParamMap.subscribe((params: ParamMap)=> {
      this.sidebarState = params.get('sidebarState') === 'true' ? true : false;
    });
  }
}
