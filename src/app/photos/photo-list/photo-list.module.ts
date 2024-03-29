import { HttpClientModule } from '@angular/common/http';
import { FilterByDescription } from './filterByDescription.pipe';
import { PhotoListComponent } from './photo-list.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotosComponent } from './photos/photos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoModule } from '../photo/photo.module';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { SearchComponent } from './search/search.component';
import { DarkenOnHoverModule } from 'src/app/shared/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
  declarations: [
    PhotosComponent,
    LoadButtonComponent,
    PhotoListComponent,
    FilterByDescription,
    SearchComponent,
  ],
  imports: [CommonModule, PhotoModule, CardModule, DarkenOnHoverModule],
  exports: [
    PhotosComponent,
    LoadButtonComponent,
    PhotoListComponent,
    FilterByDescription,
  ],
})
export class PhotoListModule {}
