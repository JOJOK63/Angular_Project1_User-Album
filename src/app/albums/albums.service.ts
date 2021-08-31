import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable , throwError} from "rxjs";
import {Album} from "./album";
import { Photo } from '../models/photo';


@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  //affecter l'url de l'api a un attribut pour pouvoir le manipuler et donc avoir accés aux données
  urlAlbums: string = "https://jsonplaceholder.typicode.com/albums";

  //le http client permet les échanges avec l'api (agi comme un observable)
  constructor(private http: HttpClient) {

  }

  getAlbumsList(): Observable<Album[]> {
    return this.http.get<Album[]>(this.urlAlbums);
  }

  getAlbumDetail(id: number): Observable<Album> {
    return this.http.get<Album>(this.urlAlbums + "/" + id)
  }

   getAlbumPhotos(albumId:number):Observable<Photo[]>{
    return this.http.get<Photo[]>(`${this.urlAlbums}/${albumId}/photos`)
 }
}
