import { createAction, props } from '@ngrx/store'
// import { createAction, props } from '@ngrx/store'
import { Hero } from '../hero'
export const delHeroes = createAction(
    "delete Heroes from state"
)

export const putHeroes = createAction(
    "Put Heroes from api into state",
    props<{ heroesProps: Hero[] }>()
)


export const addHero = createAction(
    "add single hero to the state",
    props<{ hero: string }>()
)