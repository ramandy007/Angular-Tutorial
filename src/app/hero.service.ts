import { Injectable } from '@angular/core';
import { Hero } from './hero'
import { HEROES } from './mock-heroes'
import { Observable, of } from 'rxjs'
import { MessageService } from "./message.service"
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api
  // getHeroes(): Observable<Hero[]> {
  //   this.messageService.add("HeroService:fetched heroes")
  //   return of(HEROES)
  // }
  /** GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  getHero(id: number | string | null): Observable<Hero | undefined> {

    this.messageService.add(`HeroService:Fetched hero id = ${id}`)

    return of(HEROES.find(hero => hero.id === id))

  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  constructor(private messageService: MessageService, private http: HttpClient) { }
}
