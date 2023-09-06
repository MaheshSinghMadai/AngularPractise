import { Component } from '@angular/core';
import { Heroes } from '../mock-heroes';
import { IHero } from './IHero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes = Heroes;

  selectedHero? : IHero;
  onSelect(hero : IHero) : void {
    this.selectedHero = hero;
    
  }
}
