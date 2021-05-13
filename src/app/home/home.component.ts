// Angular imports
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// NGB
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

// Services
import { RecipeService } from './../services/recipe.service';

// Model
import { recipeModel } from '../models/recipe.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
  // Properties

    // Changeable
    recipes: recipeModel[] = [];
    indexes: number[] = []

    // Readonly
    readonly forkLink = "https://lh3.googleusercontent.com/proxy/6mridt-W_PJYt1tebtWOmW30XxelANkuzLUX_ICnz9-y0dwj2kwL80h0MgOl2M-us1PcFsr7mTZnwZM6GcB40Sm6HhG-5Ho"
    readonly forkPosition = [
    "fork-top-right",
    "fork-bottom-right",
    "fork-top-left",
    "fork-bottom-left",
  ]

  constructor(private router: Router, private recipeService: RecipeService, config: NgbCarouselConfig) {
    // Carousel configuration
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
  }

  ngOnInit(): void {
    // Intialize the recipes of the carouselW
    this.selectImagesDisplay();
  }

  // function that retun a sequence of numbers from start to end in an Array
  range(start: number, end: number, step: number = 1): number[] {
    let output = [];
    if (typeof end === 'undefined') {
      end = start;
      start = 0;
    }
    for (let i = start; i < end; i += step) {
      output.push(i);
    }
    return output;
  }

  // Function to output 3 random recipes from recipes object
  selectImagesDisplay(): void {
    let max = this.recipeService.recipes.length;
    let min = 0
    let range = this.range(min, max)

    for (let i = 0; i < 3; i++) {
      let index = Math.floor(Math.random() * range.length);
      this.recipes.push(this.recipeService.recipes[range[index]]);
      this.indexes.push(index);
      range.splice(index, 1);
    }
  }

  openRecipe(i: number) {
    this.router.navigate(['recipes', this.indexes[i] + 1], {queryParams: {sidebarState: true}})
  }
}
