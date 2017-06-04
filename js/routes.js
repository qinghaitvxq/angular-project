/**
 * Created by yunxi on 2017/6/3.
 */

angular.module("app")
    .config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider.
        when('/', {
            templateUrl: '/angular-project/template/pages/intro.html',
            controller:'IntroController',
            controllerAs:'introCtrl'
        }).
        when('/course', {
            templateUrl: '/angular-project/template/pages/course.html',
            controller:''
        })
        .when('/intro',{
             redirectTo: '/'
        })
         .when('/intro/:name',{
             templateUrl:'/angular-project/template/pages/descshow.html',
             controller:'DescController',
             controllerAs:'descCtrl'
         })
         .otherwise({
             redirectTo: '/'
        });

    }])
