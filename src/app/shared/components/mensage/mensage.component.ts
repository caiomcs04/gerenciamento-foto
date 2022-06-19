import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gfotos-mensage',
  templateUrl: './mensage.component.html',
  styleUrls: ['./mensage.component.scss'],
})
export class MensageComponent implements OnInit {
  @Input() mensage: string = '';

  constructor() {}

  ngOnInit(): void {}
}
