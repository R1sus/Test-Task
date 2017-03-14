import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { routing }        from './app.routing';
import { AppComponent }   from './app.component';
import { UserComponent } from './users/users.component';
import { PostComponent } from './posts/posts.component';
import { CommentComponent } from './comments/comments.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
    declarations: [
        AppComponent,
        UserComponent,
        PostComponent,
        CommentComponent
    ],
    bootstrap:    [
        AppComponent
    ]
})
export class AppModule { }



/**
 * Created by Nadine on 13.03.2017.
 */
