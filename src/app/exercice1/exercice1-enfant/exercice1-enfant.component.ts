import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Input('c') public compteur: number;
  @Output('+') public addOne: EventEmitter<number> = new EventEmitter();
  @Output('-') public removeOne: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.addOne.emit(1);
  }

  less() {
    this.removeOne.emit(1);
  }
}
