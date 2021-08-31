import { Component, OnInit } from '@angular/core';
import {Album} from "../album";
import {AlbumsService} from "../albums.service";

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss']
})
export class AlbumsListComponent implements OnInit {
  albumsList: Album[] = [];
  albumsListView: Album[] = [];
  inputUserSaisie: string ="";

  //création du constructor avec en paramétre AlbumService pour pouvoir se servir de ces méthodes
  constructor(private albumsService : AlbumsService)
  {
    //récupération des données fourni par la methode getAlbums() et injection dans le tableau d Album vide
    this.albumsService.getAlbumsList().subscribe((data:Album[]) =>{
      this.albumsList=data;
      this.albumsListView = data;
    })
  }

  ngOnInit(): void {
  }

  onSearchAlbum() {
this.albumsListView=this.albumsList.filter(value => value.title.toLowerCase().includes(this.inputUserSaisie.toLowerCase()))
  }

}
