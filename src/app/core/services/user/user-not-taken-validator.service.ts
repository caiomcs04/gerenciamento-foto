import { debounceTime, map, switchMap, first } from 'rxjs';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UserNotTakenValidatorService {
  constructor(private userService: UserService) {}

  checkUserNameTaken() {
    return (control: AbstractControl) => {
      return control.valueChanges
        .pipe(debounceTime(300))
        .pipe(
          switchMap((userName) => this.userService.findByUserName(userName))
        )
        .pipe(map((isTaken: any) => (isTaken ? { userNameTaken: true } : null)))
        .pipe(first());
    };
  }
}
