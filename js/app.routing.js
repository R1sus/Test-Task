"use strict";
var router_1 = require('@angular/router');
var users_component_1 = require('./users/users.component');
var posts_component_1 = require('./posts/posts.component');
var comments_component_1 = require('./comments/comments.component');
var appRoutes = [
    { path: 'users', component: users_component_1.UserComponent },
    { path: 'users/:id', component: posts_component_1.PostComponent },
    { path: 'users/:id/post/:postId', component: comments_component_1.CommentComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
/**
 * Created by Nadine on 13.03.2017.
 */
//# sourceMappingURL=app.routing.js.map