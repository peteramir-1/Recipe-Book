import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// *------- Models -------*/
import { ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  httpOptions;
  ingredients: ingredient[] = [];

  constructor(private http: HttpClient) {}

  addIng(name: string, number: string) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        Origin: 'https://recipe-book-288d7-default-rtdb.firebaseio.com/',
      }),
    };
    const newRecipe = new ingredient(name, number);
    this.http
      .post(
        'https://recipe-book-da862-default-rtdb.firebaseio.com/',
        newRecipe,
        { headers: this.httpOptions }
      )
      .subscribe();
  }

  addRecipeIng(ings: ingredient[]) {
    this.ingredients.push(...ings);
  }

  addOneRecipeIng(ing: ingredient) {
    this.addIng(ing.name, ing.amount);
  }

  deleteAnIng(i: number): void {
    this.ingredients.splice(i, 1);
  }

  clear() {
    this.ingredients.splice(0, this.ingredients.length);
  }
}
