import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gfotos-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent implements OnInit {
  @Input() url?: string;
  @Input() description?: string;

  constructor() {}

  ngOnInit(): void {}
}
