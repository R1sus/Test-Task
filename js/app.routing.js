System.register(['@angular/router', './users/users.component', './posts/posts.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, users_component_1, posts_component_1;
    var appRoutes, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (users_component_1_1) {
                users_component_1 = users_component_1_1;
            },
            function (posts_component_1_1) {
                posts_component_1 = posts_component_1_1;
            }],
        execute: function() {
            appRoutes = [
                { path: '', redirectTo: '/users', pathMatch: 'full' },
                { path: 'users', component: users_component_1.UserComponent },
                { path: 'users/posts/:id', component: posts_component_1.PostComponent }
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true }));
        }
    }
});
/**
 * Created by Nadine on 13.03.2017.
 */
//# sourceMappingURL=app.routing.js.map