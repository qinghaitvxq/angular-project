/**
 * Created by caipf on 2017/6/23.
 */
/**
 * Created by yunxi on 2017/6/21.
 */
(function () {
    var app=angular.module('githubViewer');

    var UserController=function ($scope,github,$routeParams) {

        var onUserComplete=function (data) {
            $scope.user=data;
            github.getRepos($scope.user)
                .then(onRepos)
                .catch(onError);
        };

        var onRepos=function (data) {
            $scope.repos=data;
            // $location.hash("userDetails");
        };

        var onError=function (reason) {
            $scope.error="Could not fetch the user";
        };

        $scope.username=$routeParams.username;
        $scope.repoSortOrder="-stargazers_count";
        github.getUser($scope.username).then(onUserComplete,onError);
    }

    app.controller('UserController',UserController)

})();
