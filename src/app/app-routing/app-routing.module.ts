import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//*------------------ Components -----------------*/
import { HomeComponent } from '../home/home.component';
import { RecipesComponent } from '../recipes/recipes.component';
import { RecipeDetailsComponent } from '../recipes/recipe-details/recipe-details.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { FeaturesComponent } from './../features/features.component';
import { UpgradeComponent } from './../upgrade/upgrade.component';
import { AboutComponent } from './../about/about.component';
import { ErrorHandleComponent } from './../error-handle/error-handle.component';

//*------------------ Resolvers -----------------*/
import { shoppingListResolver } from './shopping-list-resolver.service';
import { recipeDataResolver } from './recipe-data-resolver.service';

//*------------------ Routes configurations -----------------*/
const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { aR: 'home' } },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'recipes/:id/detail',
    component: RecipeDetailsComponent,
    resolve: { recipe: recipeDataResolver },
    pathMatch: 'full',
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    data: { aR: 'recipes' },
    resolve: { recipes: recipeDataResolver },
    pathMatch: 'full',
  },
  {
    path: 'shoppinglist',
    component: ShoppingListComponent,
    data: { aR: 'shoppingList' },
    resolve: { ingredients: shoppingListResolver },
  },
  { path: 'features', component: FeaturesComponent },
  { path: 'upgrade', component: UpgradeComponent },
  { path: 'about', component: AboutComponent },
  { path: ':num/error', component: ErrorHandleComponent },
  { path: '**', redirectTo: '/404/error' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
