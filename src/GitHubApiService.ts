import * as request from 'request';
import { Repo } from './Repo';
import { User } from './user';

const options : any = {
    headers : {
        "User-Agent" : 'resuest'
    },
    json : true
}
export class GitHubApiService {
   
    getUserInfo(userName : string, cb: (User :User) => any) {
        
        request.get('https://api.github.com/users/' + userName, options, (error: any, response : any,body : any) => {
            let  user = new User(body);
            //console.log("body : " + body);
            //console.log("user : " + Object.values(user));
            cb(user);
        })
    }

    getRepos(userName : string, cb: (repoArray : Repo[]) => any) {
        request.get('https://api.github.com/users/' + userName + '/repos', options, (error: any, response : any,body : any) => {
        let repoArray = body;
        let repos = repoArray.map((repo : any) => new Repo(repo))
        cb(repos);
    })

}
}