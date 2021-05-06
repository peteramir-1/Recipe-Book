import { Component, OnInit } from '@angular/core';
import { recipeModel } from './../models/recipe.model';
import { ActivatedRoute, Data, ParamMap, Params } from '@angular/router';

@Component({
	selector: 'app-recipes',
	templateUrl: './recipes.component.html',
	styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  recipes: recipeModel[];
  sidebarState: boolean = false;

	constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((data: Data)=> {
      this.recipes = data['recipes'];
    });

    this.route.queryParamMap.subscribe((params: Params)=> {
      this.sidebarState = params.get('sidebarState');
    });
  }
}
