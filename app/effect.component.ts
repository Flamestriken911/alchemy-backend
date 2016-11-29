import {Component, Input} from '@angular/core';

import {Effect} from './effect'
import {Ingredient} from './ingredient'

import {IngredientService} from './ingredient.service'

@Component({
    selector: 'effect',
    template: ` <div 
                [class.discovered]="effect.discovered"
                [class.willHaveEffect]="effect.willHaveEffect"
                [class.willBeDiscovered]="effect.willBeDiscovered"
                (click)="updateDiscovery(effect); $event.stopPropagation()">
                    {{effect.name}}
                </div>`,
    styles: [   `
                div {
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
                }
                div.willHaveEffect {
                    background-color: yellow;
                    color: black;
                }
                div.willBeDiscovered {
                    background-color: green;
                    color: black;
                }
                div.willBeDiscovered.willHaveEffect {
                    background-color: green;
                    color: black;
                }
                div.willBeDiscovered.discovered {
                    background-color: white;
                    color: black;
                }
                div.willBeDiscovered.discovered.willHaveEffect {
                    background-color: yellow;
                    color: black;
                }
                `
            ],
})

export class EffectComponent {
    @Input() effect: Effect;
    @Input() ingredient: Ingredient;

    constructor(private ingredientService: IngredientService) {}

    updateDiscovery(effect: Effect): void {
        //TODO: figure out how to let the EffectComponent class handle this
        //or how to access the current 'discovered' value
        this.ingredientService.updateEffectDiscovery(this.ingredient, this.effect.name, !this.effect.discovered);
    }
}