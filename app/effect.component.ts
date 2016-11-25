import {Component, Input} from '@angular/core';

import {Effect} from './effect'

@Component({
    selector: 'effect',
    template: ` <div [class.discovered]="effect.isDiscovered">
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

    toggleDiscover(): void {
        this.effect.isDiscovered = !this.effect.isDiscovered;
    }
}