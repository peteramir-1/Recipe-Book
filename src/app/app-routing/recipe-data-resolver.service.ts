// Angular imports
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

// Services
import { RecipeService } from './../services/recipe.service';

// Models
import { recipeModel } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class recipeDataResolver implements Resolve<recipeModel | recipeModel[]> {

  constructor(private recipeService: RecipeService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    recipeModel |
    recipeModel[] |
    Observable<recipeModel | recipeModel[]> |
    Promise<recipeModel | recipeModel[]> {

    // It return a promise with the recipe array..
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Store recipe array in a variable "recipeData"
        // After 2 seconds it sends the data to the route..
        const recipeData: recipeModel[] = this.recipeService.recipes;
        if (route.paramMap.has('id')) {
          let id = +route.params['id'] - 1;
          resolve(recipeData[id]);
        } else {
          resolve(recipeData);
        }
      }, 2000);
    });
  }
}
