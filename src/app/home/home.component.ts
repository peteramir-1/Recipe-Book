// Angular imports
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { RecipeService } from './../services/recipe.service';

// Model
import { recipeModel } from '../models/recipe.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // carousel properties
  recipes: recipeModel[] = [];
  indexes: number[] = [];

  constructor(
      private router: Router,
      private recipeService: RecipeService,
    ) {
  }

  ngOnInit(): void {
    // Intialize the recipes of the carouselW
    this.selectImagesDisplay();
  }

  // function that retun a sequence of numbers from start to end in an Array
  range(start: number, end: number, step: number = 1): number[] {
    const output = [];
    if (typeof end === 'undefined') {
      end = start;
      start = 0;
    }
    for (let i = start; i < end; i += step) {
      output.push(i);
    }
    console.log(output);
    return output;
  }

  // Function to output 3 random recipes from recipes object
  selectImagesDisplay(): void {
    // tslint:disable-next-line: one-variable-per-declaration
    const max = this.recipeService.recipes.length,
          min = 0,
          range = this.range(min, max);

    for (let i = 0; i < 3; i++) {
      const index = Math.floor(Math.random() * range.length);
      this.recipes.push(this.recipeService.recipes[range[index]]);
      this.indexes.push(index);
      range.splice(index, 1);
    }
  }

  openRecipe(i: number): void {
    this.router.navigate(['recipes', this.indexes[i] + 1], {queryParams: {sidebarState: true}});
  }
}
