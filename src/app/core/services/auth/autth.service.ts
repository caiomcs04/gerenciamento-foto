import { TokenService } from './../token/token.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutthService {
  url: string = 'http://localhost:3000';

  constructor(private http: HttpClient, private tokenService:TokenService) {}

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
          this.tokenService.setToken(authToken);
        })
      );
  }
}
