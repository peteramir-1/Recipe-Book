// Angular imports
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Data, Router, ParamMap } from '@angular/router';

// Services
import { RecipeService } from '../../services/recipe.service';

// Models
import { ingredient } from '../../models/ingredient.model';
import { recipeModel } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss'],
})
export class RecipeEditComponent implements OnInit {
  // Properties
  ingredients: ingredient[] = [];
  recipeIndex: number;

  // State
  editMode: boolean;

  // Form
  recipeForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private recipeService:RecipeService) { }

  ngOnInit(): void {
    // Create recipe FORM
    this.recipeForm  = new FormGroup({
      'name': new FormControl(null, [Validators.required, this.recipeNameValidator]),
      'description': new FormControl(null, [Validators.required, this.recipeNameValidator]),
      'preparation': new FormControl(null, Validators.required),
      'imageUrl': new FormControl(null, Validators.required),
      'ingredients': new FormGroup({
        'ingName': new FormControl(null),
        'ingNum': new FormControl(null,  [
          Validators.pattern(/^[0-9]+[0-9]*$/),
        ])
      })
    });

		// Binds Values of the recipe selected to the recipe form
		// And checks whether it's on editMode or not
    this.route.data.subscribe((data: Data) => {
      if (data['recipe'] != null) {
        this.recipeForm.reset({
          name: data['recipe']['name'],
          description: data['recipe']['description'],
          preparation: data['recipe']['preparation'],
          imageUrl: data['recipe']['imgPath'],
        });
        this.ingredients = data['recipe']['ingredients'];
        this.route.paramMap.subscribe((param: ParamMap) => {
          this.recipeIndex = (+param.get('id')) -1;
        })
        this.editMode = true;
      } else {
        this.editMode = false;
      }
    });
  }

	// Recipe Validator doesn't allow a word with character number more than 15 Ch.
	// It has been made to fix a bug in the UI..
  recipeNameValidator(control: FormControl): {[s: string]: boolean} {
    let recipeName = control.value;
    if (recipeName!=null) {
      let patternCheck = recipeName.split(' ').map((namePiece: string) => {
        return /\b[0-z]{15,}\b/g.test(namePiece);
      }).includes(true);
      if (patternCheck) return {'recipeNameInvalid': true};
    }
    return null;
  }

	// Function Checks whether an input is valid or not
	// it returns either true nor false..
  invalidInput(inputControl, validationError: string = 'invalid') {
    switch (validationError) {
      case 'invalid':
        switch (inputControl) {
          case 'default':
            return this.recipeForm.invalid;
          default:
            return this.recipeForm.get(inputControl).invalid &&
            this.recipeForm.get(inputControl).touched;
        }
      default:
        switch (inputControl) {
          case 'default':
            if (this.recipeForm.get(inputControl).invalid) {
              return !this.recipeForm.errors[validationError];
            } else return false
          default:
            if (this.recipeForm.get(inputControl).invalid) {
              return this.recipeForm.get(inputControl).errors[validationError] && this.recipeForm.get(inputControl).touched;
            } else return false
        }
    }
  }

	// Add an ingredient to a recipe
  onAddIngredient() {
    let ingredients = this.recipeForm.get('ingredients')
    let ingName = ingredients.get('ingName');
    let ingNum = ingredients.get('ingNum');
    this.ingredients.push(new ingredient(ingName.value, ingNum.value));
  }

	// Remove an ingredient from a recipe
  deleteIng(index: number) {
    this.ingredients.splice(index, 1)
    console.log(this.ingredients)
  }

	// Submit the form
  onSubmit() {
		// check validation of the user to allow submittion
    if (this.recipeForm.valid) {
			// check whether the page is on the EditMode or not
      if (this.editMode) {
				// Define the New Edition of the recipe
        const NewEditionRecipe = new recipeModel(
          this.recipeForm.value.name,
          this.recipeForm.value.description,
          this.recipeForm.value.preparation,
          this.recipeForm.value.imageUrl,
          this.ingredients
        );
				// edit the Recipe selected
        this.recipeService.editRecipe(NewEditionRecipe, this.recipeIndex);
				// Navigate 1 path back
        this.router.navigate(['../'], {relativeTo: this.route});
      } else {
				// Define the New Recipe
        const NewRecipe = new recipeModel(
          this.recipeForm.value.name,
          this.recipeForm.value.description,
          this.recipeForm.value.preparation,
          this.recipeForm.value.imageUrl,
          this.ingredients
        )
				// Add it to the Recipes database
        this.recipeService.addRecipe(NewRecipe);
				// navigate to recipes
        this.router.navigate(['recipes']);
      }
    } else {
			// Tell the user what's wrong..
      this.recipeForm.get('name').markAsTouched();
      this.recipeForm.get('description').markAsTouched();
      this.recipeForm.get('preparation').markAsTouched();
      this.recipeForm.get('imageUrl').markAsTouched();
    }
  }

  onCancel() {
    if (this.editMode) {
      this.router.navigate(['../'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
    } else {
      this.router.navigate(['/recipes'], {relativeTo: this.route});
    }
  }
}
