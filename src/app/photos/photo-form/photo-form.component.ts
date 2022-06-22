import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gfotos-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss'],
})
export class PhotoFormComponent implements OnInit {
  photoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.photoForm = this.formBuilder.group({
      file: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.maxLength(300)]],
      allowComments: [true],
    });
  }

  upload() {
    const dados = this.photoForm.getRawValue();
    console.log(dados);
  }
}
