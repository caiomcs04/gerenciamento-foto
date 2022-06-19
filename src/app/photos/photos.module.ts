import { PhotoListModule } from './photo-list/photo-list.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoModule } from './photo/photo.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, PhotoModule, PhotoFormModule, PhotoListModule],
})
export class PhotosModule {}
