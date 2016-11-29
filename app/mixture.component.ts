import {Component, Input} from '@angular/core';

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
    @Input() deselectAction: any;

    deselectIngredient(ingredient: Ingredient){
        this.ingredients.splice(this.ingredients.findIndex((ing) => ing.name===ingredient.name),1);
        this.deselectAction()
    }
}