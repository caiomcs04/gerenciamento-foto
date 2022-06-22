import { Router } from '@angular/router';
import { PhotoService } from './../../core/services/photo/photo.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gfotos-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss'],
})
export class PhotoFormComponent implements OnInit {
  photoForm!: FormGroup;
  file: any;
  preview:any;

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.photoForm = this.formBuilder.group({
      file: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.maxLength(300)]],
      allowComments: [true],
    });
  }

  handleFile(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    this.file = files[0];

    const reader = new FileReader();

    reader.onload = event => this.preview = event.target?.result
    reader.readAsDataURL(this.file);
  }

  upload() {
    const description = this.photoForm.get('description')?.value;
    const allowComments = this.photoForm.get('allowComments')?.value;
    this.photoService.addPhoto(description, allowComments, this.file).subscribe(
      (res) => {
        this.route.navigate(['']);
      },
      (error) => {
        console.error(error.message);
      }
    );
  }
}
