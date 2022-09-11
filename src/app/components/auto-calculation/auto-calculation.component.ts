import { Component, OnInit } from '@angular/core';
import { HEROES } from 'src/app/data/enter-leave-list';

@Component({
  selector: 'app-auto-calculation',
  templateUrl: './auto-calculation.component.html',
  styleUrls: ['./auto-calculation.component.css']
})
export class AutoCalculationComponent implements OnInit {
  heroes = HEROES.slice();

  constructor() { }

  ngOnInit(): void {
  }

  onRemove(id: number) {
    this.heroes = this.heroes.filter(hero => hero.id !== id);
  }

}
