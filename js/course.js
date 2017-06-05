(function () {
    var app=angular.module('course',[]);
    app.directive("courseList",function () {
        return{
            restrict:'E',
            templateUrl:'course-list.html',
            scope:{
                coursedata:"="
            }
        }
    });

    app.directive("courseForm",function () {
        return{
            restrict:'E',
            templateUrl:'course-form.html',
            controller:function ($scope) {
                this.addCourse=function (course) {
                    $scope.courseList.push(course);
                }
            },
            controllerAs:"formctrl"
        }
    });
})();