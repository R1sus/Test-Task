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
var http_service_1 = require('../_services/http.service');
var UserComponent = (function () {
    function UserComponent(httpService) {
        this.httpService = httpService;
        this.users = [];
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getData().subscribe(function (data) { return _this.users = data; });
    };
    UserComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'users',
            template: "<h2>Users</h2>\n      <div>\n          <ul>\n             <li *ngFor=\"let user of users\"> \n            \n               <p hidden>{{user.id}}</p>\n               <a [routerLink] = \"[ user.id ]\"> <p>{{user?.username}}</p></a>\n               <p>Email: <a href=\"#\">{{user?.email}}</a></p>\n               <p>Company: {{user?.company.name}}</p>\n               <p>Phone: <a href=\"#\">{{user?.phone}}</a></p>\n             </li> \n \n          </ul>\n          <!--{{ user | json }}-->\n       </div>\n\n",
            providers: [http_service_1.HttpService]
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
/**
 * Created by Nadine on 13.03.2017.
 */
//# sourceMappingURL=users.component.js.map