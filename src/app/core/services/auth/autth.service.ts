import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class AutthService {
  url: string = 'http://localhost:3000';

  constructor(private http: HttpClient, private userService: UserService) {}

  authenticate(userName: string, password: string) {
    return this.http
      .post(
        `${this.url}/user/login`,
        { userName, password },
        { observe: 'response' }
      )
      .pipe(
        tap((res) => {
          const authToken = res.headers.get('x-access-token');
          this.userService.setToken(authToken);
        })
      );
  }
}
