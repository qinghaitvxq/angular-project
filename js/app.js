(function () {
    var app=angular.module("app",['courseform','course','card','ngRoute']);

    app.controller('MainController',['$http','$scope',function ($http,$scope,$location) {
        $scope.courseList=[];
        $http.get('/angular-project/data/data.json')
            .then(function (data) {
                $scope.courseList=data.data;

            });
    }]);

})();