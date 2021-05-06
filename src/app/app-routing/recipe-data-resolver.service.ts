// This page simulates HTTP requests to fetch data from database::

import { Injectable } from '@angular/core';
import { recipeModel } from '../models/recipe.model';
import { RecipeDatabase } from '../Database/DatabaseFile';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class recipeDataResolver implements Resolve<recipeModel | recipeModel[]> {

  constructor(private RecipeDatabase: RecipeDatabase) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): recipeModel | recipeModel[] | Observable<recipeModel | recipeModel[]> | Promise<recipeModel | recipeModel[]> {

    // It fetches data from the database and send data to page that resolver is added into.
    const data = this.RecipeDatabase.recipes; // HTTP Request
    let routerHasId = route.params['id'];

    if (routerHasId) {
      let id = +route.params['id'] - 1;
      return data[id];
    } else {
      return data;
    }

  }

}
