import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Hero } from 'src/app/models/enter-leave-list';

@Component({
  selector: 'app-auto-calculation-list',
  templateUrl: './auto-calculation-list.component.html',
  styleUrls: ['./auto-calculation-list.component.css'],
  animations: [
    trigger('shrinkOut', [
      state('in', style({ height: '*' })),
      transition('* => void', [
        style({ height: '*' }),
        animate(250, style({ height: 0 }))
      ])
    ])
  ]
})
export class AutoCalculationListComponent implements OnInit {
  @Input() heroes: Hero[] = [];

  @Output() remove = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  removeHero(id: number) {
    this.remove.emit(id);
  }

}
