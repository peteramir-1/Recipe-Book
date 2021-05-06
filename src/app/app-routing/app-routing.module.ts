import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { RecipesComponent } from '../recipes/recipes.component';
import { RecipeDetailsComponent } from '../recipes/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './../recipes/recipe-edit/recipe-edit.component';
import { ErrorHandleComponent } from './../error-handle/error-handle.component';

import { recipeDataResolver } from './recipe-data-resolver.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent, resolve: {recipes: recipeDataResolver} },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
	{
		path: 'recipes',
		component: RecipesComponent,
    children: [
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailsComponent, resolve: {recipe: recipeDataResolver}},
      {path: ':id/edit', component: RecipeEditComponent, resolve: {recipe: recipeDataResolver}},
    ],
    resolve: {recipes: recipeDataResolver},
  },
	{ path: 'shoppinglist', component: ShoppingListComponent },
	{ path: ':num/error', component: ErrorHandleComponent },
	{ path: '**', redirectTo: '/404/error' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
