import { ingredient } from './ingredient.model'; // Provide an ingredient array

export class recipeModel {
	/**
	 * Creates an instance of recipeModel.
	 * @param {string} name
	 * @param {string} description
	 * @param {string} preparation
	 * @param {string} imgPath
	 * @param {ingredient[]} ingredients
	 * @memberof recipeModel
	 */
	constructor(
		public name: string,
		public description: string,
		public preparation: string,
		public imgPath: string,
		public ingredients: ingredient[]
	) {}
}
