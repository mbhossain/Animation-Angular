import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Hero } from 'src/app/models/enter-leave-list';

@Component({
  selector: 'app-enter-leave-list-show',
  templateUrl: './enter-leave-list-show.component.html',
  styleUrls: ['./enter-leave-list-show.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class EnterLeaveListShowComponent implements OnInit {
  @Input() heroes: Hero[] = [];

  @Output() remove = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  removeHero(id: number) {
    this.remove.emit(id);
  }

}
