import { Photo } from './../../../model/photo';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'gfotos-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent implements OnChanges {
  @Input() photos: Photo[] = [];

  rows: any[] = [];

  constructor() {}

  // ngOnInit(): void {
  //   this.rows = this.groupColumns(this.photos);
  // }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['photos']) {
      console.log(this.photos)
      this.rows = this.groupColumns(this.photos);
    }
    console.log(this.rows)
  }

  groupColumns(photos: Photo[]) {
    const newRows: any = [];

    for (let i = 0; i < photos.length; i += 3) {
      newRows.push(photos.slice(i, i + 3));
    }

    return newRows;
  }
}
