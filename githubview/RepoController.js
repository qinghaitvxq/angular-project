/**
 * Created by caipf on 2017/6/23.
 */
(function () {
    var module=angular.module("githubViewer");
    var RepoController=function ($scope,$routeParams,github) {

        var onRepo=function (data) {
         $scope.repo=data;
       };
       var onError=function (reason) {
           $scope.error=reason;
       };

       var reponame=$routeParams.reponame;
       var username=$routeParams.username;
       github.getRepoDetails(username,reponame)
             .then(onRepo,onError);
    };
    module.controller("RepoController",RepoController);
})();