// Angular imports
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

// Services
import { ShoppingListService } from './../services/shopping-list.service';

// Models
import { ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class shoppingListResolver implements Resolve<ingredient[]> {

  constructor(private shoppingListService: ShoppingListService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    ingredient[] |
    Observable<ingredient[]> |
    Promise<ingredient[]> {

    // It return a promise with the recipe array..
    return new Promise((resolve, reject) => {
      // After 2 seconds it sends the data to the route..
      setTimeout(() => {
        resolve(this.shoppingListService.ingredients);
      }, 2000);
    });
  }
}
