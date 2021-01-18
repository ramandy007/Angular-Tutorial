import { createSelector } from '@ngrx/store'
import { Hero } from '../hero';



export interface List {
    heroes: Hero[];
}

export interface ApplicationState {
    heroes: List;
}

export const showMessageList = (state: ApplicationState) => state.heroes

export const getHeroSelector = createSelector(showMessageList, (messageList: List) => messageList.heroes);