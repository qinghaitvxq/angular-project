/**
 * Created by yunxi on 2017/6/3.
 */
(function () {
    var app=angular.module('course',[]);
    app.directive("courseList",function () {
        return{
            restrict:'E',
            templateUrl:"/angular-project/template/course-list.html"
        }
    });
})();