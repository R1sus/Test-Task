import { Routes, RouterModule } from '@angular/router';
import { BrowserModule }  from '@angular/platform-browser';
import { UserComponent } from './users/users.component';
import { PostComponent } from './posts/posts.component';
import { CommentComponent } from './comments/comments.component';




const appRoutes: Routes = [
    { path: 'users', component: UserComponent},
    { path: 'users/:id', component: PostComponent},
    { path: 'users/:id/post/:postId', component: CommentComponent}

    // { path: '**', component: NotFoundComponent }

];

export const routing = RouterModule.forRoot(appRoutes,{useHash:true});



/**
 * Created by Nadine on 13.03.2017.
 */
