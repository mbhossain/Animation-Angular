import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-insert-remove',
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0 }))
      ])
    ]),
  ],
  templateUrl: './insert-remove.component.html',
  styleUrls: ['./insert-remove.component.css']
})
export class InsertRemoveComponent implements OnInit {
  isShown = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.isShown = !this.isShown;
  }

}
