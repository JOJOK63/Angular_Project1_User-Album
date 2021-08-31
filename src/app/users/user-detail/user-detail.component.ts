import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from "../users.service";
import {User} from "../user";
import {ActivatedRoute} from "@angular/router";
import {Album} from "../../albums/album";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']

})
export class UserDetailComponent implements OnInit, OnDestroy {
  userDetail: User;
  userDetailAlbum: Album[] = [];
  userId: number;

  constructor(private usersService: UsersService, private route: ActivatedRoute) {
    //Number permet de parser
    // snapshot permet de se placer dans l'url
    //paramMap permet de découper l'url
    this.userId = Number(this.route.snapshot.paramMap.get("id"));
    this.usersService.getUserDetail(this.userId).subscribe((data: User) => {
      this.userDetail = data;
    })

    this.usersService.getUserAlbums(this.userId).subscribe((data: Album[]) => {
      this.userDetailAlbum = data;
    })
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

}
