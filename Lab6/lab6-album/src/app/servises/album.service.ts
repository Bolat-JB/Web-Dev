import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Album} from '../album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private url = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/albums`);
  }

  getAlbum(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/albums/${id}`);
  }

  createAlbum(album: any): Observable<any> {
    return this.http.post<any>(`${this.url}/albums`, album);
  }

  updateAlbum(album: any): Observable<Album[]> {
    return this.http.put<any>(`${this.url}/albums/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/albums/${id}`);
  }

  getAlbumPhotos(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/albums/${id}/photos`);
  }

}
