import { Injectable } from '@angular/core';
import { IHero } from './heroes/IHero'; 
import { Heroes } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from '../app/message/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(public msgService : MessageService) { }

  getHeroes(): Observable<IHero[]> {
    const heroes = of(Heroes);
    this.msgService.add('');
    return heroes;
  }

  getHero(id: number): Observable<IHero> {
    const hero = Heroes.find(h => h.id === id)!;
    this.msgService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
}
}
