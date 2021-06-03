import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

// *------- Models -------*/
import { ingredient } from '../models/ingredient.model';



@Injectable({
	providedIn: 'root',
})
export class ShoppingListService {
    httpOptions
	ingredients: ingredient[] = [];

	constructor(private http: HttpClient) {}
    
	/**
    * ? add an ingredient to the shopping list
	 *
    * @param {string} name
    * @param {string} number
    * @memberof ShoppingListService
    */
	addIng(name: string, number: string) {
        this.httpOptions = {
            headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*' , 'Origin': 'https://recipe-book-288d7-default-rtdb.firebaseio.com/'})
        }
        const newRecipe = new ingredient(name, number);
        this.http.post('https://recipe-book-da862-default-rtdb.firebaseio.com/', newRecipe, {headers: this.httpOptions}).subscribe();
	}

	/**
	 * ? add all recipe ingredient to the shopping list
	 *
	 * @param {ingredient[]} ings
	 * @memberof ShoppingListService
	 */
	addRecipeIng(ings: ingredient[]) {
		this.ingredients.push(...ings);
	}

	/**
	 * ? add one of the recipe ingredient to the shopping list
	 *
	 * @param {ingredient} ing
	 * @memberof ShoppingListService
	 */
	addOneRecipeIng(ing: ingredient) {
		this.addIng(ing.name, ing.amount);
	}

	/**
	 * ? Delete ingredient from the Shopping List
	 *
	 * @param {*} i
	 * @memberof ShoppingListService
	 */
	deleteAnIng(i): void {
		this.ingredients.splice(i, 1);
	}

	/**
	 * ? clear the shopping list from items
	 *
	 * @memberof ShoppingListService
	 */
	clear() {
		this.ingredients.splice(0, this.ingredients.length);
	}
}
