// Angular imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from '../home/home.component';
import { RecipesComponent } from '../recipes/recipes.component';
import { RecipeDetailsComponent } from '../recipes/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './../recipes/recipe-edit/recipe-edit.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { FeaturesComponent } from './../features/features.component';
import { UpgradeComponent } from './../upgrade/upgrade.component';
import { AboutComponent } from './../about/about.component';
import { ErrorHandleComponent } from './../error-handle/error-handle.component';

// Services
import { shoppingListResolver } from './shopping-list-resolver.service';
import { recipeDataResolver } from './recipe-data-resolver.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: {aR: 'home'} },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailsComponent, resolve: {recipe: recipeDataResolver}},
      {path: ':id/edit', component: RecipeEditComponent, resolve: {recipe: recipeDataResolver}},
    ],
    data: {aR: 'recipes'},
    resolve: {recipes: recipeDataResolver},
  },
	{ path: 'shoppinglist', component: ShoppingListComponent , resolve: {ingredients: shoppingListResolver} , data: {aR: 'shoppingList'}},
  { path: 'features', component: FeaturesComponent },
  { path: 'upgrade', component: UpgradeComponent },
  { path: 'about', component: AboutComponent },
  { path: ':num/error', component: ErrorHandleComponent },
	{ path: '**', redirectTo: '/404/error' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
