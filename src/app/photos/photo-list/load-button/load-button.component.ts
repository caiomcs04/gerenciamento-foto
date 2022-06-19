import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gfotos-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.scss']
})
export class LoadButtonComponent implements OnInit {

  @Input()hasMore!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
