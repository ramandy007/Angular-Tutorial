import { createReducer, on, Action } from '@ngrx/store'
import { HEROES } from '../mock-heroes'

import { addHero, delHeroes, putHeroes } from './heroes.actions'
import { HeroesState } from './state.model'

export const initialHerosState: HeroesState = { heroes: HEROES }

export const heroReducer = createReducer(
    initialHerosState,
    on(delHeroes, (state) => ({ heroes: [] })),
    on(putHeroes, (state, { heroesProps }) => ({ heroes: heroesProps })),

)

export function HeroReducer(state: HeroesState | undefined, action: Action) {
    return heroReducer(state, action)
}
