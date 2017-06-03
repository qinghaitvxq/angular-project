/**
 * Created by yunxi on 2017/6/3.
 */
(function () {
    var app=angular.module("courseform",[]);
    app.directive("courseForm",function () {
        return{
            restrict:'E',
            templateUrl:"/angular-project/template/course-form.html"
        }
    });
})();