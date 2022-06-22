import { MessageModule } from './../../shared/components/message/message.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoFormComponent } from './photo-form.component';



@NgModule({
  declarations: [PhotoFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MessageModule
  ],
  exports:[PhotoFormComponent]
})
export class PhotoFormModule { }
