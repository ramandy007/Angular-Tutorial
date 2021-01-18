import { Injectable } from '@angular/core';
import { createAction, props } from '@ngrx/store'
import { Actions, createEffect, ofType, } from '@ngrx/effects';

import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { HeroService } from '../hero.service'
import { Hero } from '../hero'
import { HttpClient, HttpHeaders } from '@angular/common/http';


export const herosFromApi = createAction('[Heroes Page] Load Heroes')
export const successLoadedFromApi = createAction('[Heroes API] Heroes Loaded Success', props<{ heroes: Hero[] }>())


@Injectable()
export class HeroesEffects {

    private heroesUrl = 'api/heroes';
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };


    loadHeroes$ = createEffect(() => this.actions$.pipe(
        ofType(herosFromApi),
        mergeMap(() => this.http.get<Hero[]>(this.heroesUrl)
            .pipe(
                map(heroes => (successLoadedFromApi({ heroes }))),
                catchError(() => EMPTY)
            ))
    )
    );

    constructor(
        private actions$: Actions,
        private heroService: HeroService,
        private http: HttpClient,
    ) { }
}