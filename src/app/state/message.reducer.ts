import { createReducer, on, Action } from '@ngrx/store'

import { addMessage, deleteAll } from './message.actions'

// import { Message } from './messages.model'
export interface State {
    messages: string[]
}

export const initialState: State = { messages: [] }

export const messageReducer = createReducer(
    initialState,
    on(addMessage, (state, { message }) => ({ messages: [...state.messages, message] })
    ),
    on(deleteAll, (state) => ({ messages: [] }))
)

export function reducer(state: State | undefined, action: Action) {
    return messageReducer(state, action)
}