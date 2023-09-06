import { Component } from '@angular/core';
import { Heroes } from '../mock-heroes';
import { IHero } from './IHero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes : IHero[] = [];

  selectedHero? : IHero;

  constructor(private heroService : HeroService, private msgService: MessageService){

  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero : IHero) : void {
    this.selectedHero = hero;
    this.msgService.add(`HeroesComponent: Selected hero.id = ${hero.id}`);
  }

  getHeroes() : void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
