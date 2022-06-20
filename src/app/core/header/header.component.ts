import { Router } from '@angular/router';
import { User } from './../../model/user';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'gfotos-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user$?: Observable<User|null>;
  // user?: User;

  constructor(private userService: UserService, private route:Router) {
    this.user$ = this.userService.getUser();
    // this.user$?.subscribe((user) => (this.user = user));
  }

  ngOnInit(): void {}

  logout(){
    this.userService.logout()
    this.route.navigate(['']);
  }
}
