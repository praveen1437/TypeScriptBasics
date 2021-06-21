import { Repo } from "./Repo";

export class User{
    login : string;
    fullName : string;
    reposCount : number;
    followersCount : number;
    repos? : Repo[];

    constructor(UserResponse : any) {
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
}