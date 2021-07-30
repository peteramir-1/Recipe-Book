import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Data, Router, ParamMap } from '@angular/router';

// *------- Services -------*/
import { RecipeService } from '../../services/recipe.service';

// *------- Models -------*/
import { ingredient } from '../../models/ingredient.model';
import { recipeModel } from '../../models/recipe.model';

@Component({
	selector: 'app-recipe-edit',
	templateUrl: './recipe-edit.component.html',
	styleUrls: ['./recipe-edit.component.scss'],
})
export class RecipeEditComponent implements OnInit {
	ingredients: ingredient[] = [];
	recipeIndex: number;

	// *------- States -------*/
	// todo  control states from one place in the program
	isEditMode: boolean;

	// *------- Forms  -------*/
	recipeForm: FormGroup;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private recipeService: RecipeService
	) {}

	ngOnInit(): void {
		// ? Recipe form creation
		this.recipeForm = new FormGroup({
			name: new FormControl(null, [
				Validators.required,
				this.recipeNameValidator,
			]),
			description: new FormControl(null, [
				Validators.required,
				this.recipeNameValidator,
			]),
			preparation: new FormControl(null, Validators.required),
			imageUrl: new FormControl(null, Validators.required),
			ingredients: new FormGroup({
				ingName: new FormControl(null),
				ingNum: new FormControl(null, [Validators.pattern(/^[0-9]+[0-9]*$/)]),
			}),
		});

		// ? It checks whether there is a data recived from database or not to set the value of isEditMode
		this.route.data.subscribe((data: Data) => {
			if (data.recipe != null) {
				this.recipeForm.reset({
					name: data.recipe.name,
					description: data.recipe.description,
					preparation: data.recipe.preparation,
					imageUrl: data.recipe.imgPath,
				});
				this.ingredients = data.recipe.ingredients;
				this.route.paramMap.subscribe((param: ParamMap) => {
					this.recipeIndex = +param.get('id') - 1;
				});
				this.isEditMode = true;
			} else {
				this.isEditMode = false;
			}
		});
	}

	/**
	 * ? Recipe Validator doesn't allow a word with character number more than 15 Ch.
	 * ? It has been made to fix a bug in the UI..
	 *
	 * @param {FormControl} control
	 * @return {*}  {{ [s: string]: boolean }}
	 * @memberof RecipeEditComponent
	 */
	recipeNameValidator(control: FormControl): { [s: string]: boolean } {
		const recipeName = control.value;
		if (recipeName != null) {
			const patternCheck = recipeName
				.split(' ')
				.map((namePiece: string) => {
					return /\b\S{1,15}\b/g.test(namePiece);
				})
				.includes(false);
			if (patternCheck) {
				return { recipeNameInvalid: true };
			}
		}
		return null;
	}

	/**
	 *
	 * ? Function Checks whether an input is valid or not
	 * ? it returns either true nor false..
	 *
	 * @param {*} inputControl
	 * @param {string} [validationError='invalid']
	 * @return {*}
	 * @memberof RecipeEditComponent
	 */
	invalidInput(inputControl, validationError: string = 'invalid') {
		switch (validationError) {
			case 'invalid':
				switch (inputControl) {
					case 'default':
						return this.recipeForm.invalid;
					default:
						return (
							this.recipeForm.get(inputControl).invalid &&
							this.recipeForm.get(inputControl).touched
						);
				}
			default:
				switch (inputControl) {
					case 'default':
						if (this.recipeForm.get(inputControl).invalid) {
							return !this.recipeForm.errors[validationError];
						} else {
							return false;
						}
					default:
						if (this.recipeForm.get(inputControl).invalid) {
							return (
								this.recipeForm.get(inputControl).errors[validationError] &&
								this.recipeForm.get(inputControl).touched
							);
						} else {
							return false;
						}
				}
		}
	}

	// ? Add an ingredient to a recipe
	onAddIngredient() {
		const ingredients = this.recipeForm.get('ingredients');
		const ingName = ingredients.get('ingName');
		const ingNum = ingredients.get('ingNum');
		this.ingredients.push(new ingredient(ingName.value, ingNum.value));
	}

	// ? Remove an ingredient from a recipe
	deleteIng(index: number) {
		this.ingredients.splice(index, 1);
	}

	/**
	 * ? Onclick save button it decides whether the Form is valid or not
	 * ? It submits the form or make the inputs touched so the user can see what is wrong
	 */
	onSubmit() {
		// check validation of the user to allow submittion
		if (this.recipeForm.valid) {
			if (this.isEditMode) {
				const NewEditionRecipe = new recipeModel(
					this.recipeForm.value.name,
					this.recipeForm.value.description,
					this.recipeForm.value.preparation,
					this.recipeForm.value.imageUrl,
					this.ingredients,
          this.recipeIndex
				); // Define the New Edition of the recipe
				this.recipeService.editRecipe(NewEditionRecipe, this.recipeIndex); // edit the Recipe selected
				this.router.navigate(['../'], { relativeTo: this.route }); // Navigate 1 path back
			} else {
				const NewRecipe = new recipeModel(
					this.recipeForm.value.name,
					this.recipeForm.value.description,
					this.recipeForm.value.preparation,
					this.recipeForm.value.imageUrl,
					this.ingredients,
          this.recipeIndex
				); // Define the New Recipe
				this.recipeService.addRecipe(NewRecipe); // Add it to the Recipes database
				this.router.navigate(['recipes']); // navigate to recipes
			}
		} else {
			this.recipeForm.markAllAsTouched(); // Tell the user what's wrong..
		}
	}

	// ? on Cancel click it navigates away
	onCancel() {
		if (this.isEditMode) {
			this.router.navigate(['../'], {
				relativeTo: this.route,
				queryParamsHandling: 'preserve',
			});
		} else {
			this.router.navigate(['/recipes'], { relativeTo: this.route });
		}
	}
}
