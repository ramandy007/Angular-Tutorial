import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MessageService } from "../message.service"
import { addMessage, deleteAll } from "../state/message.actions"

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {

  }
  // add(message: string) {
  //   this.store.dispatch(addMessage({ message: message }))

  // }
  // removeAll() {
  //   this.store.dispatch(deleteAll())

  // }
}
