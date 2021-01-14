import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HEROES } from '../mock-heroes'
import { HeroService } from "../hero.service"
import { MessageService } from "../message.service"
import { Store } from '@ngrx/store';
import { putHeroes } from '../state/heroes.actions';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes !: Hero[]
  constructor(private heroService: HeroService, private store: Store<{ HeroList: { heroList: Hero[] } }>) {
    // this.selectedHero = { id: 0, name: "" }
  }

  getHeroes(): void {
    this.store.select('HeroList').subscribe(state => { this.heroes = state.heroList; console.log(this.heroes) })
  }
  ngOnInit(): void {
    this.getHeroes()
  }

  add(name: string): void {
    name = name.trim(); l
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
