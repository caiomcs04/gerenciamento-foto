import { Router } from '@angular/router';
import { UserService } from './../../core/services/user/user.service';
import { UserNotTakenValidatorService } from './../../core/services/user/user-not-taken-validator.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { NewUser } from 'src/app/model/new-user';

@Component({
  selector: 'gfotos-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private userService: UserService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      userName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
          // Validators.pattern(/^[a-z0-9_\-]+$/),
          lowerCaseValidator,
        ],
        this.userNotTakenValidatorService.checkUserNameTaken(),
      ],
      fullName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(40),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14),
        ],
      ],
    });
  }

  singup() {
    const user = this.signupForm.getRawValue() as NewUser;
    this.userService.addUser(user).subscribe(
      () => {
        this.route.navigate(['']);
      },
      (error) => console.error(error.message)
    );
  }
}
