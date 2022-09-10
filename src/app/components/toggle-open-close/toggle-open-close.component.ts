import { Component, OnInit } from '@angular/core';
import { trigger, transition, state, animate, style } from '@angular/animations';

@Component({
  selector: 'app-toggle-open-close',
  templateUrl: './toggle-open-close.component.html',
  styleUrls: ['./toggle-open-close.component.css'],
  animations: [
    trigger('childAnimation', [
      state('open', style({
        width: '250px',
        opacity: 1,
        backgroundColor: '#1ED07D'
      })),
      state('closed', style({
        width: '100px',
        opacity: 0.8,
        backgroundColor: '#5F1ED0'
      })),
      transition('* => *', [
        animate('1s')
      ]),
    ]),
  ]
})
export class ToggleOpenCloseComponent implements OnInit {
  isDisabled = false;
  isOpen = false;
  toggleMode = 'Active Animations';

  constructor() { }

  ngOnInit(): void {
  }

  toggleAnimations() {
    this.isDisabled = !this.isDisabled;
    this.toggleMode = this.isDisabled ? 'Active Animations' : 'Deactive Animations';
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
