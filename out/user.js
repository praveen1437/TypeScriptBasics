"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(UserResponse) {
        this.login = UserResponse.login;
        this.fullName = UserResponse.name;
        this.reposCount = UserResponse.public_repos;
        this.followersCount = UserResponse.followers;
        console.log("login : " + UserResponse.login);
        console.log("name : " + UserResponse.name);
        console.log("repos : " + UserResponse.public_repos);
        console.log("followers : " + UserResponse.followers);
        // this.login = UserResponse.login;
    }
    return User;
}());
exports.User = User;
