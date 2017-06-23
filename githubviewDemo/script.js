/**
 * Created by caipf on 2017/6/23.
 */
(function () {
    var github=function ($http) {

        var getUser=function (username) {
            return $http.get("http://api.github.com/users/"+username)
                        .then(function (response) {
                             return response.data;
                        });
        };
        var getRepos=function (user) {
            return $http.get(user.repos_url)
                .then(function (response) {
                    return response.data;
                })
        };
        var getRepoDetails=function (username,reponame) {
            var repo;
            var repoUrl="https://api.github.com/repos/"+username+"/"+reponame;
            return $http.get(repoUrl)
                .then(function (response) {
                    repo=response.data;
                    return $http.get(repoUrl+"/collaborators");
                })
                .then(function (response) {
                    repo.collaborators=response.data;
                })
        };
        return{
             getUser:getUser,
             getRepos:getRepos,
            getRepoDetails:getRepoDetails
        };
    };
    var module=angular.module('githubViewer');
     module.factory("github",github)
})();