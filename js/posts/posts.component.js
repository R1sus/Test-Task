"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var http_service_1 = require('../_services/http.service');
var PostComponent = (function () {
    function PostComponent(httpService, activateRoute) {
        this.httpService = httpService;
        this.posts = [];
        this.userId = activateRoute.snapshot.params['id'];
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getPost(this.userId).subscribe(function (data) { return _this.posts = data; });
        // this.httpService.getUser(this.userId).subscribe(data => this.user= data);
    };
    PostComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'posts',
            template: "<h2>Posts from {{user?.username}} user.email </h2>\n      <div>\n          <ul>\n             <li *ngFor=\"let post of posts\">\n               <p hidden>{{post?.id}}</p>\n               <a [routerLink] = \"['post', post.id]\"><p><b>Title:{{post?.title}}</b></p></a>\n               <p>Body: {{post?.body}}</p>\n              \n              </li>\n          </ul>\n      </div>\n\n",
            providers: [http_service_1.HttpService]
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService, router_1.ActivatedRoute])
    ], PostComponent);
    return PostComponent;
}());
exports.PostComponent = PostComponent;
/**
 * Created by Nadine on 14.03.2017.
 */
/**
 * Created by Nadine on 14.03.2017.
 */
//# sourceMappingURL=posts.component.js.map