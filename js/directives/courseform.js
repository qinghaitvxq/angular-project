/**
 * Created by yunxi on 2017/6/3.
 */
(function () {
    var app=angular.module("courseform",[]);
    app.directive("courseForm",function () {
        return{
            restrict:'E',
            templateUrl:"/angular-project/template/course-form.html",
            controller:function ($http) {
                var controller=this;
                controller.errors=null;
               this.addCourse=function (course) {
                   $http({
                       method:'POST',
                       url:'/test',
                       data:course
                   }).catch(function (error) {
                       controller.errors=error.statusText;
                   })
               }
            },
            controllerAs:'formctrl'
        }
    });
})();