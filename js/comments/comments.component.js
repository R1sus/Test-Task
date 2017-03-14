System.register(['@angular/core', '@angular/router', '../_services/http.service'], function(exports_1, context_1) {
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
    var core_1, router_1, http_service_1;
    var CommentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            }],
        execute: function() {
            CommentComponent = (function () {
                function CommentComponent(httpService, activateRoute) {
                    this.httpService = httpService;
                    this.comments = [];
                    this.postId = activateRoute.snapshot.params['postId'];
                }
                CommentComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.httpService.getPost(this.postId).subscribe(function (data) { return _this.comments = data; });
                };
                CommentComponent = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'comments',
                        template: "<h2>Comments on post.title </h2>\n      <div>\n          <ul>\n             <li *ngFor=\"let comment of comments\">\n               <!--<p hidden>{{comment.id}}</p>-->\n                <p><b>Title:{{comment?.name}}</b></p>\n                <p>Body: {{comment?.body}}</p>\n                <p><a href=\"#\">Email: {{comment?.email}}</a></p>\n              </li>\n          </ul>\n      </div>\n       \n\n",
                        providers: [http_service_1.HttpService]
                    }), 
                    __metadata('design:paramtypes', [http_service_1.HttpService, router_1.ActivatedRoute])
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