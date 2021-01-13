import { createAction, props } from '@ngrx/store'

export const addMessage = createAction(
    "[Message Log] Add message",
    props<{ message: string }>()

)

export const deleteAll = createAction(
    "[Message Log] Delete Message",

)

