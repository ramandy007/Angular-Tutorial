import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { addMessage, deleteAll } from "./state/message.actions"
import { showMessagesSelector } from './state/message.selector';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: any;
  messages$!: Observable<{ messages: string[] }>
  modMessages$: Observable<string[]>;
  // add(message: string) {
  //   this.messages.push(message)
  // }
  // clear() {
  //   this.messages = []
  // }

  constructor(private store: Store<{ messageList: { messages: string[] } }>) {
    this.messages$ = store.select('messageList')
    this.messages$.subscribe(messagelist => { this.messages = messagelist.messages; console.log(this.messages); })

    this.modMessages$ = store.select(showMessagesSelector);
  }

  add(message: string) {
    this.store.dispatch(addMessage({ message: message }))

  }
  clear() {
    this.store.dispatch(deleteAll())


  }
}
