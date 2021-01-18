import *  as herosActions from './heroes.effects'

import { createReducer, on, Action } from '@ngrx/store';
import { Hero } from '../hero'

export const heroesFeatureKey = 'heroes';


export interface State {

    heroes: Hero[]

}


export const initialState: State = {
    heroes: []
};


const HeroReducer = createReducer(
    initialState,
    on(herosActions.successLoadedFromApi, (state, { heroes }) => ({ heroes: heroes })),


);

export function reducer(state: State | undefined, action: Action) {
    return HeroReducer(state, action);
}