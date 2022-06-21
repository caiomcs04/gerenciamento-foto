import { HttpClient } from '@angular/common/http';
import { User } from './../../../model/user';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { TokenService } from './../token/token.service';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { NewUser } from 'src/app/model/new-user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<User | null>(null);
  private userName?: string;
  url: string = 'http://localhost:3000';

  constructor(private tokenService: TokenService, private http: HttpClient) {
    this.tokenService.hasToken() && this.decodeAndNotify();
  }

  setToken(token: string | null) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser(): Observable<User | null> {
    return this.userSubject.asObservable();
  }

  findByUserName(userName: string): Observable<User> {
    return this.http.get<User>(`${this.url}/user/exists/${userName}`);
  }

  addUser(newUser: NewUser) {
    return this.http.post(`${this.url}/user/signup`, newUser);
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    if (token) {
      const user = jwtDecode(token) as User;
      this.userName = user.name;
      this.userSubject.next(user);
    }
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  isLoged() {
    return this.tokenService.hasToken();
  }

  getUserName() {
    return this.userName;
  }
}
