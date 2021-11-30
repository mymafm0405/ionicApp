import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipes: Recipe[] = [
    new Recipe(
      'r1',
      'Burger',
      'https://static.onecms.io/wp-content/uploads/sites/9/2021/02/12/roast-chicken-with-chile-basil-vinaigrette-charred-broccoli-potatoes-FT-RECIPE0321.jpg',
      ['Tomatoes', 'Carrot', 'Olives']
    ),
    new Recipe(
      'r2',
      'Meat',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/02/breakfast-recipes.jpg',
      ['Fries', 'Sauce']
    ),
  ];

  constructor() {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: string) {
    return this.recipes.find((rec) => rec.id === id);
  }
}
