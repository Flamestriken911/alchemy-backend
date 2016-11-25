import {Component, OnInit} from '@angular/core';

import {Ingredient} from './ingredient';
import {IngredientComponent} from './ingredient.component';
import {IngredientService} from './ingredient.service';

@Component ({
    moduleId: module.id,
    selector: 'ingredients',
    templateUrl: 'ingredients.component.html',
})

export class IngredientsComponent implements OnInit {
    ingredients: Ingredient[];

    constructor(private ingredientService: IngredientService) {}

    getIngredients(): void {
        this.ingredientService.getIngredients().then(ingredients => this.ingredients = ingredients);
    }

    ngOnInit(): void {
        this.getIngredients();
    }
}