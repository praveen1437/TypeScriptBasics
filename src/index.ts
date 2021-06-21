import {GitHubApiService} from './GitHubApiService';
import * as _ from 'lodash';
import { Repo } from './Repo';
import { User } from './user';

let svc = new GitHubApiService();
if(process.argv.length < 3) {
    console.log("Please pass username")
}
else {
    let UserName = process.argv[2];
    svc.getUserInfo(UserName, (user : User) => {
        svc.getRepos(UserName, (repos : Repo[]) => {
            let sortedRepos = _.sortBy(repos,[(repo) => repo.forkCount]);
            let filteredRpos = _.take(sortedRepos,5);
            user.repos = filteredRpos;
            console.log(user);
        });
    });
}

