import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  public valeur: string;
  @ViewChild('v') public elt: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  showValue() {
      this.valeur = this.elt.nativeElement.value;
  }
}
