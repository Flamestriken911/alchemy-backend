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
    .mixture-info {
      text-align: center;
    }
    .mixture-button {
      margin-top: 1%;
    }
    `
  ]
})

export class AppComponent implements OnInit { 
  name = 'Angular'; 
  ingredients: Ingredient[];
  mixtureIngredients: Ingredient[] = [];
  mixtureEffects: string[] = [];

  constructor(private ingredientService: IngredientService) {}

  selectIngredient(ingredient: Ingredient){
    if(this.mixtureIngredients.length < 3){
      //Update the coloration of the ingredients in the mixture based on what the user is adding
      for(var i=0; i<this.mixtureIngredients.length; i++) {
        this.mixtureIngredients[i].effects.forEach((effect) => {
          if(ingredient.effects.some((newEffect) => newEffect.name === effect.name)) {
            if(!effect.willHaveEffect) this.mixtureEffects.push(effect.name);
            effect.willHaveEffect = true;
            effect.willBeDiscovered = !effect.isDiscovered ? true : false;
          }
        })
      }
      this.mixtureIngredients.push(ingredient); //The added ingredient will already have the correct properties
      this.getMatches();
    }
  }

  getIngredients(): void {
    this.ingredientService.getIngredients().then(ingredients => this.ingredients = ingredients);
  }

  //Gets matches for ingredients in mixture (returns default list if mixture empty)
  getMatches = () => {
    this.ingredientService.getMatches(this.mixtureIngredients)
      .then(ingredients => this.ingredients = ingredients);
}

  createMixture(): void {
    this.ingredientService.saveMixtureCreation(this.mixtureIngredients.map((ing) => ing.id));
    this.mixtureIngredients = [];
    this.mixtureEffects = [];
    this.getIngredients();
  }

  ngOnInit(): void {
    this.getIngredients();
  }
}
