import { RouterModule } from '@angular/router';
import { MessageModule } from './../../shared/components/message/message.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoFormComponent } from './photo-form.component';
import { PhotoModule } from '../photo/photo.module';



@NgModule({
  declarations: [PhotoFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MessageModule,
    PhotoModule,
    RouterModule
  ],
  exports:[PhotoFormComponent]
})
export class PhotoFormModule { }
