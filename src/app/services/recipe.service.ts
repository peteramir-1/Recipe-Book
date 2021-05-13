import { recipeModel } from './../models/recipe.model';
import { ShoppingListService } from './shopping-list.service';
import { ingredient } from '../models/ingredient.model';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class RecipeService {
  recipes: recipeModel[] = [
		new recipeModel(
			'ALL AMERICAN CHEESE BURGER',
			'Our version of the American Classic.',
			'Lightly oil and preheat grill. Cut the tomato into ¼ inch thick slices; season lightly with sea salt and pepper. Set aside. Cut the red onion into 1/8 inch thick slices; season lightly with sea salt and pepper. Set aside. Brush the cut side of each sandwich roll with olive oil and set aside. \nBeing careful not to overwork the meat, shape it into 6 oval patties. Sprinkle both sides of each patty with about ¼ teaspoon kosher salt and freshly ground black pepper. Place the patties on the hot grill. Grill until they can be turned without sticking, then turn. For rare, cook about 4 minutes on each side; for medium-rare, 5 minutes on each side; for medium, 6 minutes on each side. \nJust before the burgers are done cooking, top each with a slice of cheese and let melt. While burgers are grilling, place the rolls, cut side down, on grill to toast lightly, about 2 minutes. \nPlace lettuce and tomato slices on the bottom half of toasted sandwich rolls. Top with burgers and onion. Finish with roll tops. Serve with ketchup, mayonnaise and mustard.',
			'https://realfood.tesco.com/media/images/Burger-31LGH-a296a356-020c-4969-86e8-d8c26139f83f-0-1400x919.jpg',
			[
				new ingredient('Large Ripe Heirloom Tomatoes', '2'),
				new ingredient('Large Red Onion', '1'),
				new ingredient('Sea Salt', '1'),
				new ingredient('Freshly ground black pepper', '1'),
				new ingredient('Olive Oil', '1'),
				new ingredient('Ground Beef', '2.5'),
				new ingredient('Kosher salt', '1'),
				new ingredient('slices American cheese', '6'),
				new ingredient('Leaf or Romaine Lettuce Leaves', '6'),
				new ingredient('Ketchup', '1'),
				new ingredient('Mayonnaise', '1'),
				new ingredient('Mustard', '1'),
				new ingredient('Telera Roll', '1'),
			]
		),
		new recipeModel(
			'CLASSIC DELI STYLE GRILLED CHEESE',
			'Topped with flavorful slices of ham and salami, this grilled cheese recipe incorporates flavors from your favorite neighborhood deli for a hearty grilled cheese sandwich.',
			'Preheat medium skillet or similar for 2 minutes.\nLightly coat one side of each slice of bread in butter.  On the other side of each slice of bread, spread a layer of your favorite spicy brown or Dijon mustard to taste.\nPlace the bread in the preheated pan butter side down.  Place 2 slices of Munster cheese on each slice of bread and wait as it begins to melt.\nPlace the slices of ham and salami on top of one slice of bread.\nCarefully transfer the other slice of bread cheese side down to complete the assembly of the sandwich.\nPress lightly with a spatula and continue to cook until the bottom side of the sandwich is golden brown and cheese is melted.\nFlip the sandwich and cook for 2-3 more minutes until the outside of the bread is golden brown and melted cheese is visible.\nCut in half and enjoy!',
			'https://www.labreabakery.com/sites/default/files/styles/recipe/public/2017-04/58ca008a7fd28f0b00f28fcd-v2.jpg?itok=zgdCraBo',
			[
				new ingredient('Munster cheese', '4'),
				new ingredient('Deli ham', '2'),
				new ingredient('Salami', '2'),
				new ingredient('Spicy brown or Dijon mustard', '0.5'),
				new ingredient('Butter', '2'),
				new ingredient('La Brea Bakery Whole Grain Loaf', '1'),
			]
		),
		new recipeModel(
			'ROAST BEEF PARTY SANDWICHES',
			'These finger sandwiches are sure to be a hit at your next get together.',
			'For mayo spread, combine all ingredients together in a small bowl; cover and refrigerate for several hours or over night.\nPrepare rolls according to package directions. Cut rolls in half lengthwise. Spread bottom half with chili lime mayonnaise and top with lettuce, roast beef, bacon, avocado slices, and onion slices.\nTop with other half of bread and cut each sandwich in half to form 2 sandwiches. Top with a pick to hold party sandwiches together to serve.',
			'https://www.labreabakery.com/sites/default/files/styles/recipe/public/2017-03/SnackOn_Recipes_CelebrationsAtHome__Telera_Slider__RoastBeefPaartySandwiches_2.jpg?itok=mqT1LhTs',
			[
				new ingredient('Mayo', '1/3'),
				new ingredient('Lime Juice', '1'),
				new ingredient('Chili Powder', '1'),
				new ingredient('Cayenne Pepper', '0.25'),
				new ingredient('Fine Salt', '0.25'),
				new ingredient('Thin sliced roast beef from the deli', '1'),
				new ingredient('Sliced Smoked Bacon', '1'),
				new ingredient('Avocado peeled, seeded, & sliced', '1'),
				new ingredient('Pieces Lettuce', '10'),
				new ingredient('Large Red Onion', '1'),
				new ingredient('Take & Bake Telera Slider Rolls', '8'),
			]
		),
		new recipeModel(
			'EGG IN A ROLL BREAKFAST SANDWICH',
			'Try our favorite dinner roll dressed up for a tasty breakfast treat.',
			'Heat dinner rolls in oven per packaging instructions until fully baked. Remove and let cool. Carve out the center of each roll using a paring knife.\nTo assemble, put 1/4 cup of arugula in each bread bowl. Next, add a poached egg and top with parmesan cheese, red pepper flakes and season with salt and pepper to taste. Add fresh fruit on the side and serve.',
			'https://www.labreabakery.com/sites/default/files/styles/recipe/public/2017-03/French_Dinner_Roll_Recipe_Breakfast_Dinner_for_Breakfast_Sandwich_Staged-001-cropped_1400.png?itok=KpEXq62p',
			[
				new ingredient('Poached', '2'),
				new ingredient('Baby Arugula', '0.5'),
				new ingredient('Red Pepper Flakes', '0.5'),
				new ingredient('Parmesan Cheese, Grated', '1'),
				new ingredient('Salt and Pepper to taste', '1'),
				new ingredient('Frozen Take & Bake French Dinner Roll', '8'),
			]
		),
		new recipeModel(
			'WHITE BEAN CROSTINI WITH PANCETTA AND BASIL PESTO',
			'A great mixture of textures that delivers savory and sweet flavors on our appetizing wheat loaf.',
			'Drain the liquid from the beans. Mince the garlic. Mince the shallot. Place a medium sized saute pan (preferably non-stick) over medium heat and add two tablespoons olive oil and the pancetta.\nAfter a minute, stir the pancetta and add the garlic and shallots and cook for another minute. Before the garlic and shallot start to brown, add the white beans to the pan. Add the salt, pepper, and vinegar to the beans and stir until beans are thoroughly heated. Put beans into a food processor and pulse until smooth.\nPlace a separate large saute pan over medium heat and add the remaining olive oil. Place the sliced bread in the pan and move them about to be sure each picks up the olive oil. After about a minute (or when the bottom side of the bread becomes lightly golden) turn over all the pieces and continue cooking until the second side is also lightly golden.\nRemove bread to a plate lined with a paper towel to absorb any excess oil. Spread the bean mixture evenly over each slice. Drizzle with basil pesto.',
			'https://www.labreabakery.com/sites/default/files/styles/recipe/public/2017-03/Whole-Grain-White-Bean-Crostini2---9_2011.jpg?itok=GnMeWpm5',
			[
				new ingredient('White Beans', '16'),
				new ingredient('Pancetta', '4'),
				new ingredient('cloves Garlic, peeled', '2'),
				new ingredient('Shallot, large', '1'),
				new ingredient('Olive Oil', '5'),
				new ingredient('Balsamic Vinegar', '1'),
				new ingredient('Fine sea salt', '0.5'),
				new ingredient('Freshly ground black pepper', '1'),
				new ingredient('Wheat Loaf', '1'),
			]
		),
		new recipeModel(
			'MINI FRENCH ONION DIP BREAD BOWLS',
			'These mini bread bowls filled with cheesy French onion dip are sure to be a hit with guests at your next get together. ',
			'1.    Preheat oven to 350 degrees F.\n2.    Carefully cut the top of each roll off, about 1/2 inch down from the top. Leaving a 1/2 inch border, hollow out each roll, saving the inside and cutting into cubes. You can also cut the top of each roll into cubes. Lay the rolls on a large baking sheet as well as the cubed insides. Spray with olive oil spray or drizzle with olive oil and set aside.\n3.    Melt butter in a large skillet over medium high heat.\n4.    Add the onions and garlic to the butter and stir to coat. Cook, stirring occasionally, for about 15 minutes or until the onions are fully caramelized and translucent.\n5.    Add the broth and wine to the onions and stir to combine. As soon as its all simmering, reduce the heat to low.\n6.    Stir in cream cheese, sour cream, mozzarella, and salt and pepper. Remove from the heat.\n7.    Spoon the onion dip mixture into each bread bowl, about 2 tablespoons per roll. The dip should be just slightly higher than the top of the opening.\n8.    Bake uncovered for 5-6 minutes.',
			'https://www.labreabakery.com/sites/default/files/styles/recipe/public/2017-03/mini-french-onion-dip-bread-bowls-collage3-1400.png?itok=eRgkDxVK',
			[
				new ingredient('Butter, Salted', '0.25'),
				new ingredient('Large White Onion, Chopped', '1'),
				new ingredient('Cloves Garlic, Minced', '1'),
				new ingredient('Beef Broth', '0.25'),
				new ingredient('Red Wine', '2'),
				new ingredient('Cream Cheese, Room Temperature', '4'),
				new ingredient('Low Fat Sour Cream', '0.5'),
				new ingredient('Mozzarella Cheese, Shredded', '3/4'),
				new ingredient('Salt and Pepper to taste', '1'),
				new ingredient('slices Swiss Cheese, Thin slices cut in half', '6'),
				new ingredient('Pretzels for dipping', '1'),
				new ingredient('Take & Bake French Dinner Roll', '6'),
			]
		),
	];

  constructor(private shoppingListService: ShoppingListService,) {}

	selectIng(ings: ingredient[]) {
		this.shoppingListService.addRecipeIng(ings);
  }

  addRecipe(recipe: recipeModel) {
    this.recipes.push(recipe);
  }

  editRecipe(recipe: recipeModel, index: number) {
    this.recipes[index] = recipe;
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1)
  }

}
