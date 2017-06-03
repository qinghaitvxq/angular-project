/**
 * Created by yunxi on 2017/6/3.
 */

angular.module("app")
    .config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider.
        when('/', {
            templateUrl: '/angular-project/template/pages/intro.html'
        }).
        when('/intro', {
            templateUrl: '/angular-project/template/pages/intro.html',
            controller:''
        }).
        when('/course', {
            templateUrl: '/angular-project/template/pages/course.html',
            controller:''
        })
            .otherwise({
                redirectTo: '/'
            });

    }])
