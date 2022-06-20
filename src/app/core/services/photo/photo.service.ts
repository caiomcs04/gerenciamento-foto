import { Photo } from '../../../model/photo';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  findAll(userName: string): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.url}/${userName}/photos`);
  }

  findAllPaginated(userName: string, page: number) {
    const params = new HttpParams().append('page', page.toString());
    return this.http.get<Photo[]>(`${this.url}/${userName}/photos`, { params });
  }
}
