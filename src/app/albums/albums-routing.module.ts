import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AlbumsListComponent} from "./albums-list/albums-list.component";
import {AlbumDetailComponent} from "./album-detail/album-detail.component";

const routes: Routes = [
  { path: '', component: AlbumsListComponent },
  { path: ':id', component: AlbumDetailComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }
