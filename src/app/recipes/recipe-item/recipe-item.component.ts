import { Component, Input } from '@angular/core';

// *------- Models -------*/
import { recipeModel } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent {
  @Input() recipe: recipeModel;

  constructor() {}
}
