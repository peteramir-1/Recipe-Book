import { RecipeService } from './../services/recipe.service';
import { recipeModel } from './../models/recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  recipes: recipeModel[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    const range = (start, end, step = 1) => {
      let output = [];
      if (typeof end === 'undefined') {
        end = start;
        start = 0;
      }
      for (let i = start; i < end; i += step) {
        output.push(i);
      }
      return output;
    };

    let max = this.recipeService.recipes.length;
    let min = 1
    let selectionRange = range(min, max)
    let selectedIndexes: number[] = []

    for (let i = 0; i < 3; i++) {
      var index = Math.floor(Math.random() * selectionRange.length);
      selectedIndexes.push(selectionRange[index]);
      selectionRange.splice(index, 1);
    }

    this.recipes = [
      this.recipeService.recipes[selectedIndexes[0]],
      this.recipeService.recipes[selectedIndexes[1]],
      this.recipeService.recipes[selectedIndexes[2]],
    ]
    console.log(this.recipes)
  }

}
