import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from "../users.service";
import {User} from "../user";

@Component({
  // selecteur css 'app-users-list' qui permet de faire appel a ce component
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit ,OnDestroy {
  // usersList est un attribut ;
  // :User[] représente le type(un tableau de User)
  // [] est égal a sa valeur a l'initialisation
     usersList: User[] = [];
     usersListView: User[] = [];
     inputUserSaisie: string ="";
  // ne pas oublier que le constructeur est aussi une méthode
  constructor(private usersService :UsersService)
  {

    // utilisation de la méthode getUsersList() dans usersService , pour récupérer les données .
    // le subscribe pour souscrire a l'observable
   this.usersService.getUsersList().subscribe((data:User[]) =>{
     this.usersList=data;
     this.usersListView=data;
   });
  }

  ngOnInit(): void {

  }




// méthode qui permet de filter les données de la liste user
  onSearchUser() {
    // le filtre permet de dire que tu filtre avec filter(), la value qui est égal au name de l'objet
    // le .includes permet de dire si value contient la valeur saisie par le user
    this.usersListView = this.usersList.filter(value => value.name.toLowerCase().includes(this.inputUserSaisie.toLowerCase()))
  }

  ngOnDestroy(): void {
    // unsubcribe de l'observable
    // this.usersService.unsubcribe(); ???
  }
}
