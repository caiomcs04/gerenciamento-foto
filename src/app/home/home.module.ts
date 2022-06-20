import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SiginComponent } from './sigin/sigin.component';
import { MessageModule } from '../shared/components/message/message.module';



@NgModule({
  declarations: [SiginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MessageModule
  ],
  exports:[SiginComponent]
})
export class HomeModule { }
