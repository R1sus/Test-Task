System.register(['@angular/core', '../_services/http.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_service_1;
    var CommentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            }],
        execute: function() {
            CommentComponent = (function () {
                function CommentComponent(httpService) {
                    this.httpService = httpService;
                    this.users = [];
                    this.posts = [];
                    this.done = false;
                }
                // user = {};
                CommentComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.httpService.getData().subscribe(function (data) { return _this.users = data; });
                };
                CommentComponent.prototype.getPost = function (userId) {
                    var _this = this;
                    console.log(userId);
                    this.httpService.getPost(userId)
                        .subscribe(function (data) { _this.posts = data; _this.done = true; });
                };
                CommentComponent = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'comments',
                        template: "<h2>Comments on {{ post.title }}</h2>\n      <div>\n          <ul>\n             <li *ngFor=\"let user of users\" (click)=\"getPost(user.id)\">\n               <p hidden>{{user.id}}</p>\n               <p>{{user?.username}}</p>\n               <p>Email: <a href=\"#\">{{user?.email}}</a></p>\n               <p>Company: {{user?.company.name}}</p>\n               <p>Phone: <a href=\"#\">{{user?.phone}}</a></p>\n             </li> \n             <div *ngIf=\"done\"> \n               <li *ngFor=\"let post of posts\" >\n                 <p><b>{{ post.title }}</b></p>\n                 <p>{{ post.body }}</p>\n             \n                </li>\n             </div>\n \n          </ul>\n       </div>\n\n",
                        providers: [http_service_1.HttpService]
                    }), 
                    __metadata('design:paramtypes', [http_service_1.HttpService])
                ], CommentComponent);
                return CommentComponent;
            }());
            exports_1("CommentComponent", CommentComponent);
        }
    }
});
/**
 * Created by Nadine on 14.03.2017.
 */
//# sourceMappingURL=comments.component.js.map