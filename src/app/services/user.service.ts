import { Photo } from './../model/photo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  findAll(userName:string):Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.url}/${userName}/photos`);
  }
}
