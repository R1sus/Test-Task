import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute} from '@angular/router'
import { HttpService } from '../_services/http.service';
import { User } from '../_models/user';
import { Post } from '../_models/post';
import { Comment } from '../_models/comment';

@Component({
    moduleId: module.id,
    selector: 'comments',
    template: `<h2>Comments on post.title </h2>
      <div>
          <ul>
             <li *ngFor="let comment of comments">
               <!--<p hidden>{{comment.id}}</p>-->
                <p><b>Title:{{comment.name}}</b></p>
                <p>Body: {{comment.body}}</p>
                <p><a href="#">Email: {{comment.email}}</a></p>
              </li>
          </ul>
      </div>
       

`,
    providers: [HttpService]

})
export class CommentComponent implements  OnInit{

    postId: number;

    constructor(private httpService: HttpService, activateRoute: ActivatedRoute) {
        this.postId = activateRoute.snapshot.params['postId'];
    }

    comments: Comment[]=[];

    ngOnInit() {
        this.httpService.getPost(this.postId).subscribe(data => this.comments = data);

    }


}




/**
 * Created by Nadine on 14.03.2017.
 */
