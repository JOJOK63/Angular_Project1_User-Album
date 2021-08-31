import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import {AlbumsService} from "../albums.service";
import {ActivatedRoute} from "@angular/router";
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss']
})
export class AlbumDetailComponent implements OnInit {
  albumDetail:Album;
  albumDetailPhoto : Photo[] = [];
  albumId:number;

  constructor(private albumsService : AlbumsService , private  route: ActivatedRoute ) {
    this.albumId = Number(this.route.snapshot.paramMap.get("id"));
    this.albumsService.getAlbumDetail(this.albumId).subscribe((data:Album) =>{
      this.albumDetail=data;
    })

    this.albumsService.getAlbumPhotos(this.albumId).subscribe((data: Photo[]) => {
      this.albumDetailPhoto = data;
    })
  }

  ngOnInit(): void {
  }

}
