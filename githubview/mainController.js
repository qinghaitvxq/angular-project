/**
 * Created by yunxi on 2017/6/21.
 */
(function () {
    var app=angular.module('githubViewer',[]);

    var MainController=function ($scope,github,$interval) {

        var onUserComplete=function (data) {
            $scope.user=data;
           github.getRepos($scope.user)
                .then(onRepos)
                .catch(onError);
        };

        var onRepos=function (data) {
          $scope.repos=data;
        };

        var onError=function (reason) {
          $scope.error="Could not fetch the user";
        };
        var decrementCountdown=function () {
            $scope.countdown--;
            if($scope.countdown<1){
                $scope.search($scope.username);
            }
        }
        var countdownInterval=null;
        var startCountdown=function () {
           countdownInterval= $interval(decrementCountdown,1000,$scope.countdown);
        }

        $scope.search=function (username) {
            github.getUser(username)
                .then(onUserComplete)
                .catch(onError);
            if(countdownInterval){
                $interval.cancel(countdownInterval);
                $scope.countdown=null;
            }
        }
        $scope.message="GitHub Viewer";
        $scope.username="angular";
        $scope.repoSortOrder="-stargazers_count";
        $scope.countdown=5;
        startCountdown();
    }

    app.controller('MainController',MainController)

})();
