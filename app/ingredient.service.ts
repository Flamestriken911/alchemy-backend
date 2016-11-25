import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Ingredient} from './ingredient';

@Injectable()

export class IngredientService {
    private ingredientsUrl = 'app/ingredients';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http){}

    getIngredients(): Promise<Ingredient[]> {
        return this.http.get(this.ingredientsUrl)
                    .toPromise()
                    .then(response => response.json().data as Ingredient[])
                    .catch(this.handleError);
    }

    updateEffectDiscovery(ingredient: Ingredient, effectName: string, value: boolean): Promise<Ingredient> {
        const url = `${this.ingredientsUrl}/${ingredient.id}`;
        ingredient.effects[ingredient.effects.findIndex(ef => ef.name === effectName)].isDiscovered = value;
        var newIngredient: Ingredient = {name: ingredient.name, id: ingredient.id, effects: ingredient.effects};
        return this.http
            .put(url, JSON.stringify(newIngredient), {headers: this.headers})
            .toPromise()
            .then(() => ingredient)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        //TODO: real error handling
        console.error('An error occurred:', error);
        return Promise.reject(error.message || error);
    }
}