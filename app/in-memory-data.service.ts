import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let ingredients = [
            {name: 'sample ingredient 1', 
            id: 1,
            effects: [
                {name: 'effect 1', isDiscovered: false, willHaveEffect: false, willBeDiscovered: false}, 
                {name: 'effect 2', isDiscovered: false, willHaveEffect: true, willBeDiscovered: false}, 
                {name: 'effect 3', isDiscovered: false, willHaveEffect: false, willBeDiscovered: false}, 
                {name: 'effect 4', isDiscovered: false, willHaveEffect: false, willBeDiscovered: true}
                ]
            },
            {name: 'sample ingredient 2', 
            id: 2,
            effects: [
                {name: 'effect 1', isDiscovered: false, willHaveEffect: false, willBeDiscovered: false}, 
                {name: 'effect 2', isDiscovered: false, willHaveEffect: false, willBeDiscovered: true}, 
                {name: 'effect 3', isDiscovered: true, willHaveEffect: false, willBeDiscovered: false}, 
                {name: 'effect 4', isDiscovered: false, willHaveEffect: false, willBeDiscovered: false}
                ]
            },
            {name: 'sample ingredient 3', 
            id: 3,
            effects: [
                {name: 'effect 1', isDiscovered: false, willHaveEffect: false, willBeDiscovered: false}, 
                {name: 'effect 2', isDiscovered: false, willHaveEffect: true, willBeDiscovered: true}, 
                {name: 'effect 3', isDiscovered: true, willHaveEffect: true, willBeDiscovered: false}, 
                {name: 'effect 4', isDiscovered: false, willHaveEffect: false, willBeDiscovered: false}
                ]
            },
            {name: 'sample ingredient 4', 
            id: 4,
            effects: [
                {name: 'effect 1', isDiscovered: true, willHaveEffect: false, willBeDiscovered: true}, 
                {name: 'effect 2', isDiscovered: false, willHaveEffect: false, willBeDiscovered: false}, 
                {name: 'effect 3', isDiscovered: true, willHaveEffect: true, willBeDiscovered: true}, 
                {name: 'effect 4', isDiscovered: false, willHaveEffect: false, willBeDiscovered: false}
                ]
            },
        ]
        return {ingredients};
    }
}