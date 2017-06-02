(function () {
    var app=angular.module('app',['course']);

    app.controller('MainController',['$http','$scope',function ($http,$scope) {
        $scope.courseList=[];
        $http.get('/angular-project/data/data.json')
            .then(function (data) {
                $scope.courseList=data.data;

            });
    }]);
})();