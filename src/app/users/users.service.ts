import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {User} from "./user";
import {Album} from "../albums/album";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  //permet de maipuler l'url de l'api
 urlUser : string = "https://jsonplaceholder.typicode.com/users";


 // le http client  permet la communication et les échanges avec l'api  ,et agis comme un observable
  constructor(private http: HttpClient) {

  }

  // une méthode avec :.... va forcément retourner quelque chose
  // ici elle va retourner un observable de tableau de user
  getUsersList():Observable<User[]>{
    // le this représente le http de cette class
  return this.http.get<User[]>(this.urlUser);
  }

  getUserDetail(id:number):Observable<User>{
    //
    return this.http.get<User>(this.urlUser+"/"+id);
  }

  getUserAlbums(userId:number):Observable<Album[]>{
    return this.http.get<Album[]>(`${this.urlUser}/${userId}/albums`)
  }

}

