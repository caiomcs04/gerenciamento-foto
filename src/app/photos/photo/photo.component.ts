import { Component, Input, OnInit } from '@angular/core';

const cloud = 'http://localhost:3000/imgs/';

@Component({
  selector: 'gfotos-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent {
  private _url = '';

  @Input() set url(url: string) {
    if (!url.startsWith('data')) {
      this._url = cloud + url;
    } else {
      this._url = url;
    }
  }
  @Input() description?: string;

  get url() {
    return this._url;
  }
}
