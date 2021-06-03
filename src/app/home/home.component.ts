import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// *------------------ Services -----------------*/
import { RecipeService } from './../services/recipe.service';

// *------------------ Models -----------------*/
import { recipeModel } from '../models/recipe.model';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	recipes: recipeModel[] = [];
	indexes: number[] = [];

	constructor(private router: Router, private recipeService: RecipeService) {}

	ngOnInit(): void {
		this.selectImagesDisplay(3); // Intialize the recipes of the carouselW
	}

	//
	/**
	 ** function that retun a sequence of numbers from start to end in an Array
	 *
	 * @param {number} start
	 * @param {number} end
	 * @param {number} [step=1]
	 * @return {*}  {number[]}
	 * @memberof HomeComponent
	 */
	range(start: number, end: number, step: number = 1): number[] {
		const output = [];
		if (typeof end === 'undefined') {
			end = start;
			start = 0;
		}
		for (let i = start; i < end; i += step) {
			output.push(i);
		}
		return output;
	}

	/**
	 * ? Function to output 3 random recipes from recipes object
	 *
	 * @param {number} imgNum
	 * @memberof HomeComponent
	 */
	selectImagesDisplay(imgNum: number): void {
		const max = this.recipeService.recipes.length,
			min = 0,
			range = this.range(min, max);

		for (let i = 0; i < imgNum ; i++) {
			const index = Math.floor(Math.random() * range.length);
			this.recipes.push(this.recipeService.recipes[range[index]]);
			this.indexes.push(index);
			range.splice(index, 1);
		}
	}

	openRecipe(i: number): void {
		this.router.navigate(['recipes', this.indexes[i] + 1]); // open recipe Clicked
	}
}
