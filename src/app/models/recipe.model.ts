import { ingredient } from './ingredient.model'; // Provide an ingredient array

export class recipeModel {
  /**
   * Creates an instance of recipeModel.
   *
   * @param name
   * @param description
   * @param preparation
   * @param imgPath
   * @param ingredients
   * @memberof recipeModel
   */
  constructor(
    public name: string,
    public description: string,
    public preparation: string,
    public imgPath: string,
    public ingredients: ingredient[],
    public id: number
  ) {}
}
