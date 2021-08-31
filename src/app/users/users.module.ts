import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';


@NgModule({
  declarations: [
    UsersListComponent,
    UserDetailComponent,
  ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        FormsModule,

    ]
})
export class UsersModule { }
