import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gfotos-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  @Input() mensage: string = '';

  constructor() {}

  ngOnInit(): void {}
}
