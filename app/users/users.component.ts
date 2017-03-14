import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { HttpService } from '../_services/http.service';
import { User } from '../_models/user';
// import { Post } from '../_models/post';

@Component({
    moduleId: module.id,
    selector: 'users',
    template: `<h2>Users</h2>
      <div>
          <ul>
             <li *ngFor="let user of users"> 
             <!--(click)="getPost(user.id)">-->
               <p hidden>{{user.id}}</p>
               <a [routerLink] = "['posts', user.id ]"> <p>{{user?.username}}</p></a>
               <p>Email: <a href="#">{{user?.email}}</a></p>
               <p>Company: {{user?.company.name}}</p>
               <p>Phone: <a href="#">{{user?.phone}}</a></p>
             </li> 
             <!--<div *ngIf="done"> -->
               <!--<li *ngFor="let post of posts" >-->
                 <!--<p><b>{{ post.title }}</b></p>-->
                 <!--<p>{{ post.body }}</p>-->
             <!---->
                <!--</li>-->
             <!--</div>-->
 
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
    // posts: Post[]=[];
    // user = {};
    ngOnInit() {

        this.httpService.getData().subscribe(data => this.users= data);
    }

    // done: boolean = false;
    // getPost(userId:number) {
    //     console.log(userId);
    //     this.httpService.getPost(userId)
    //         .subscribe((data) => {this.posts =data; this.done=true;});
    //
    // }

}


/**
 * Created by Nadine on 13.03.2017.
 */
