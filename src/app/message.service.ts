import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { showMessagesSelector } from './state/message.selector'
import { addMessage, deleteAll } from "./state/message.actions"
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages$!: Observable<string[]>
  // add(message: string) {
  //   this.messages.push(message)
  // }
  // clear() {
  //   this.messages = []
  // }

  constructor(private store: Store<{ messageList: { messages: string[] } }>) {
    this.messages$ = store.select(showMessagesSelector)
    // this.messages$.subscribe(messagelist => { this.messages = messagelist.messages; console.log(this.messages); })
  }

  add(message: string) {
    this.store.dispatch(addMessage({ message: message }))

  }
  clear() {
    this.store.dispatch(deleteAll())


  }
}