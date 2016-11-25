import {Component, Input} from '@angular/core';

import {Ingredient} from './ingredient';
import {Effect} from './effect';
import {IngredientService} from './ingredient.service';

@Component({
    moduleId: module.id,
    selector: 'my-ingredient',
    templateUrl: 'ingredient.component.html',
    styles: [
                `.ingredient {
                    background-color: #c9c9c9;
                    border-radius: 25px;
                    border: 2px solid black;
                    text-align: center;
                    width: 40%;
                    margin: auto;
                    margin-bottom: 1%;
                    padding-bottom: 2%;
                }`,
            ],
})

export class IngredientComponent {
   @Input() ingredient: Ingredient;

    constructor(private ingredientService: IngredientService) {}

    updateDiscovery(effect: Effect): void {
        //TODO: figure out how to let the EffectComponent class handle this
        //or how to access the current 'discovered' value
        this.ingredientService.updateEffectDiscovery(this.ingredient, effect.name, !effect.isDiscovered);
    }

}