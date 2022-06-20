import { isPlatformBrowser } from '@angular/common';
import { ElementRef, ViewChild } from '@angular/core';
import { AutthService } from '../../core/services/auth/autth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/services/platform/platform-detector.service';

@Component({
  selector: 'gfotos-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.scss'],
})
export class SiginComponent implements OnInit {
  @ViewChild('userNameInput') userNameInput?: ElementRef<HTMLInputElement>;

  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private autthService: AutthService,
    private route: Router,
    private platformDetectorService: PlatformDetectorService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    const userName = this.loginForm.get('userName')?.value;
    const password = this.loginForm.get('password')?.value;

    this.autthService.authenticate(userName, password).subscribe(
      (res) => {
        this.route.navigate(['user', userName]);
      },
      (error) => {
        console.log(error.message);

        this.loginForm.reset();
        this.platformDetectorService.isPlatformBrowser() &&
          this.userNameInput?.nativeElement.focus();
      }
    );
  }
}
