import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
  heroes = HEROES;

  constructor() { }

  ngOnInit(): void {}

  onSelect(hero: Hero) {
    console.log('Selected Hero: ' + JSON.stringify(hero));
  }
}
