(function () {
    var app=angular.module('course',[]);

    // app.controller("courseController",function () {
    //     this.courseList=courseList;
    // });
    //
    // app.controller('formController',function () {
    //     this.courseList=courseList;
    //     this.addCourse=function (course) {
    //         courseList.push(course);
    //         this.course={};
    //     }
    // });
    app.directive("courseList",function () {
       return{
           restrict:'E',
           templateUrl:'course-list.html',
           controller:function () {
               this.courseList=courseList;
           },
           controllerAs:"coursectrl"
       }
    });
    app.directive("courseForm",function () {
        return{
            restrict:'E',
            templateUrl:'course-form.html',
            controller:function () {
                this.courseList=courseList;
                this.addCourse=function (course) {
                    courseList.push(course);
                    this.course={};
                }
            },
            controllerAs:"formctrl"
        }
    });

    var courseList=[{
        "name":"Shaping Up With AngularJS",
        "category":"javascript",
        "image":"image/1.jpg",
        "des":"Learn to extend HTML's syntax with AngularJS to create dynamic web applications.",
        "time":"5.0"
    },{
        "name":"Staying Sharp With AngularJS",
        "category":"javascript",
        "image":"image/3.jpg",
        "des":"Use AngularJS to create flexible directives and reusable services for a modular and speedy app!",
        "time":"6.0"
    }];
})();