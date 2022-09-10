import { Component, OnInit } from '@angular/core';
import { HEROES } from 'src/app/data/enter-leave-list';

@Component({
  selector: 'app-enter-leave-list',
  templateUrl: './enter-leave-list.component.html',
  styleUrls: ['./enter-leave-list.component.css']
})
export class EnterLeaveListComponent implements OnInit {
  heroes = HEROES.slice();

  constructor() { }

  ngOnInit(): void {
  }

  onRemove(id: number) {
    this.heroes = this.heroes.filter(hero => hero.id !== id);
  }

}
