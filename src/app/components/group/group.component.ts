import { Component, OnInit } from '@angular/core';
import { HEROES } from 'src/app/data/enter-leave-list';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  heroes = HEROES.slice();

  constructor() { }

  ngOnInit(): void {
  }

  onRemove(id: number) {
    this.heroes = this.heroes.filter(hero => hero.id !== id);
  }

}
