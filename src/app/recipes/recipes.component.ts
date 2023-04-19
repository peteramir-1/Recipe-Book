import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';

// *------- Services -------*/
import { RecipeService } from './../services/recipe.service';

// *------- Models -------*/
import { recipeModel } from '../models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  public recipes: recipeModel[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.recipes = data.recipes; // recive component DATA
    });
  }

  /**
   *
   * ? used for opening detail panel to see the recipe detail
   *
   * @param i
   * @memberof RecipesComponent
   */
  openDetail(id: number): void {
    const route = `${id}/detail`;
    this.router.navigate([route], { relativeTo: this.route });
  }
}
