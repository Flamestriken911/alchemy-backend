import { Component, OnInit } from '@angular/core';

import {Ingredient} from './ingredient';
import {IngredientService} from './ingredient.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styles: [
    `
    .ingredient-wrapper {
      width: 40%;
      margin: auto;
      text-align: center;
    }
    .selected {
      display: none;
    }
    `
  ]
})

export class AppComponent implements OnInit { 
  name = 'Angular'; 
  ingredients: Ingredient[];
  mixtureIngredients: Ingredient[] = [];

  constructor(private ingredientService: IngredientService) {}

  selectIngredient(ingredient: Ingredient){
    if(this.mixtureIngredients.length < 3){
      this.mixtureIngredients.push(ingredient);
      this.getMatches();
    }
  }

  getIngredients(): void {
    this.ingredientService.getIngredients().then(ingredients => this.ingredients = ingredients);
  }

  //Gets matches for ingredients in mixture (returns default list if mixture empty)
  getMatches = () => {
    var ingredientArray: [Ingredient[]];
    this.ingredientService.getMatches(this.mixtureIngredients)
      .then(ingredients => ingredientArray = ingredients)
      .then(() => this.mixtureIngredients = ingredientArray[0])
      .then(() => this.ingredients = ingredientArray[1]);
}

  ngOnInit(): void {
    this.getIngredients();
  }
}
