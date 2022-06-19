import { HttpClientModule } from '@angular/common/http';
import { FilterByDescription } from './filterByDescription.pipe';
import { PhotoListComponent } from './photo-list.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotosComponent } from './photos/photos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoModule } from '../photo/photo.module';

@NgModule({
  declarations: [
    PhotosComponent,
    LoadButtonComponent,
    PhotoListComponent,
    FilterByDescription,
  ],
  imports: [CommonModule, PhotoModule],
  exports: [
    PhotosComponent,
    LoadButtonComponent,
    PhotoListComponent,
    FilterByDescription,
  ],
})
export class PhotoListModule {}
