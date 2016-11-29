import {Component, Input} from '@angular/core';

import {Effect} from './effect';
import {Ingredient} from './ingredient';
import {IngredientService} from './ingredient.service';
import {IngredientComponent} from './ingredient.component';

@Component ({
    moduleId: module.id,
    selector: 'mixture',
    template:   `
                <div class='mixture-container'>
                    <div [hidden]="ingredients.length > 0">Please select an ingredient</div>
                    <div class="ingredient-wrapper" *ngFor="let ingredient of ingredients" (click)="deselectIngredient(ingredient)">
                        <my-ingredient [ingredient]=ingredient></my-ingredient>
                    </div>
                </div>
                <div class="mixture-info" *ngIf="ingredients.length > 1">
                    The mixture has the following effects so far: {{mixtureEffects.join(', ')}}
                    <br>
                </div>
                `,
    styles: [`
        .ingredient-wrapper {
            display: inline-block;
            width: 30%;
            margin-right: 2.5%;
        }
        .mixture-container {
            width:100%;
            margin: auto;
        }
        `
    ]
})

export class MixtureComponent {
    @Input() ingredients: Ingredient[] = [];
    @Input() mixtureEffects: string[] = [];
    @Input() deselectAction: any;

    deselectIngredient(ingredient: Ingredient){
        this.ingredients.splice(this.ingredients.findIndex((ing) => ing.name===ingredient.name),1);
        this.updateCurrentEffects();
        this.deselectAction()
    }

    updateCurrentEffects(): void {
        var allEffects: string[] = [];
        var activeEffects: string[] = [];
        //This will give us an array of all effect names
        this.ingredients.forEach((ing) => {
            allEffects.push(...ing.effects.map((effect) => effect.name));
        })
        //Active effects will be a unique list of effects that appear more than once
        while(allEffects.length >1){
            (function() {
                if(!allEffects.slice(1).some((str) => str === allEffects[0])) {
                    allEffects = allEffects.slice(1);
                } else {
                    activeEffects.push(allEffects[0]);
                    allEffects = allEffects.filter((str) => str !== allEffects[0]);               
                }
            })();
        }
        this.mixtureEffects = activeEffects;
        console.log(this.mixtureEffects.join(','))
    }
}