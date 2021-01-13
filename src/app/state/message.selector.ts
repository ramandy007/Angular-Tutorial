import { createSelector } from '@ngrx/store'



export interface AppState {
    messageList: string[]
}


export const showMessages = (state: AppState) => state.messageList

export const selectMessages = createSelector(
    showMessages,
    (messageList: string[]) => { return messageList }
);