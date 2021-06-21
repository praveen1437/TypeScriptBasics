"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GitHubApiService_1 = require("./GitHubApiService");
var _ = __importStar(require("lodash"));
var svc = new GitHubApiService_1.GitHubApiService();
if (process.argv.length < 3) {
    console.log("Please pass username");
}
else {
    var UserName_1 = process.argv[2];
    svc.getUserInfo(UserName_1, function (user) {
        svc.getRepos(UserName_1, function (repos) {
            var sortedRepos = _.sortBy(repos, [function (repo) { return repo.forkCount; }]);
            var filteredRpos = _.take(sortedRepos, 5);
            user.repos = filteredRpos;
            console.log(user);
        });
    });
}
