import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { HttpService } from '../_services/http.service';
import { User } from '../_models/user';


@Component({
    moduleId: module.id,
    selector: 'users',
    template: `<h2>Users</h2>
      <div>
          <ul>
             <li *ngFor="let user of users"> 
            
               <p hidden>{{user.id}}</p>
               <a [routerLink] = "[ user.id, 'posts' ]"> <p>{{user?.username}}</p></a>
               <p>Email: <a href="#">{{user?.email}}</a></p>
               <p>Company: {{user?.company.name}}</p>
               <p>Phone: <a href="#">{{user?.phone}}</a></p>
             </li> 
 
          </ul>
          <!--{{ user | json }}-->
       </div>

`,
    providers: [HttpService]

})
export class UserComponent implements  OnInit{

    constructor(private httpService: HttpService) {
    }
    users: User[]=[];

    ngOnInit() {

        this.httpService.getData().subscribe(data => this.users= data);
    }



}


/**
 * Created by Nadine on 13.03.2017.
 */
