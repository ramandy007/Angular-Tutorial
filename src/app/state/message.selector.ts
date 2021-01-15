import { createSelector } from '@ngrx/store'



export interface Messages {
    messages: string[];
}

export interface ApplicationState {
    messageList: Messages;
}

export const showMessageList = (state: ApplicationState) => state.messageList

export const showMessagesSelector = createSelector(showMessageList, (messageList: Messages) => messageList.messages);