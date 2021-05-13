import { ingredient } from './ingredient.model';

export class recipeModel {
	constructor(
		public name: string,
    public description: string,
		public preparation: string,
		public imgPath: string,
		public ingredients: ingredient[]
	) {}
}


