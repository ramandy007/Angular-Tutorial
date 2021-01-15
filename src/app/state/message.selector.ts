import { createSelector } from '@ngrx/store'



export interface AppState {
    messageList: string[]
}


export const showMessages = (state: AppState) => state.messageList

export const selectMessages = createSelector(
    showMessages,
    (messageList: string[]) => { return messageList }
);
export interface Messages {
  messages: string[];
}

export interface ApplicationState {
  messageList: Messages;
}

export const showMessageList = (state: ApplicationState) => state.messageList

export const showMessagesSelector = createSelector(showMessageList, (messageList: Messages) => messageList.messages);
