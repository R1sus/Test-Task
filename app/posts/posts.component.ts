import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute} from '@angular/router';
import { HttpService } from '../_services/http.service';
import { User } from '../_models/user';
import { Post } from '../_models/post';

@Component({
    moduleId: module.id,
    selector: 'posts',
    template: `<h2>Post from </h2>
      <div>
          <ul>
             <li *ngFor="let post of posts">
               <!--<p hidden>{{post.id}}</p>-->
               <p><b>Title:{{post?.title}}</b></p>
               <p>Body: {{post?.body}}</p>
              
              </li>
          </ul>
      </div>

`,
    providers: [HttpService]

})
export class PostComponent implements  OnInit {

    userId: number;

    constructor(private httpService: HttpService, activateRoute: ActivatedRoute) {
        this.userId = activateRoute.snapshot.params['id'];
    }

    posts: Post[]=[];
    
    ngOnInit() {
            this.httpService.getPost(this.userId).subscribe(data => this.posts = data);
        // this.httpService.getData().subscribe(data => this.users= data);
    }

    // done: boolean = false;
    // getPost(userId:number) {
    //     console.log(userId);
    //     this.httpService.getPost(userId)
    //         .subscribe((data) => {this.posts =data; this.done=true;});



}

/**
 * Created by Nadine on 14.03.2017.
 */

















/**
 * Created by Nadine on 14.03.2017.
 */
