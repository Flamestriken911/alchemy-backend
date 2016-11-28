import {Component, Input} from '@angular/core';

import {Effect} from './effect'
import {Ingredient} from './ingredient'

import {IngredientService} from './ingredient.service'

@Component({
    selector: 'effect',
    template: ` <div [class.discovered]="effect.isDiscovered"
                (click)="updateDiscovery(effect)">
                    {{effect.name}}
                </div>`,
    styles: [
                `div {
                    background-color: #607393;
                    border-radius: 50px;
                    color: white;
                    border: 1px solid black;
                    text-align: center;
                    width: 80%;
                    margin: auto;
                    margin-bottom: 1%;
                }
                .discovered {
                    background-color: white;
                    color: black;
                }`
            ],
})

export class EffectComponent {
    @Input() effect: Effect;
    @Input() ingredient: Ingredient;

    constructor(private ingredientService: IngredientService) {}

    updateDiscovery(effect: Effect): void {
        //TODO: figure out how to let the EffectComponent class handle this
        //or how to access the current 'discovered' value
        this.ingredientService.updateEffectDiscovery(this.ingredient, this.effect.name, !this.effect.isDiscovered);
    }
}