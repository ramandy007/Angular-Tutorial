import { createReducer, on, Action } from '@ngrx/store'

import { addMessage, deleteAll } from './message.actions'

// import { Message } from './messages.model'
import { MessageState } from './state.model'


export const initialState: MessageState = { messages: [], }

export const messageReducer = createReducer(
    initialState,
    on(addMessage, (state, { message }) => ({ messages: [...state.messages, message] })
    ),
    on(deleteAll, (state) => ({ ...state, messages: [] }))
)

export function reducer(state: MessageState | undefined, action: Action) {
    return messageReducer(state, action)
}