import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gfotos-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent {
  @Input() url?: string;
  @Input() description?: string;
}
