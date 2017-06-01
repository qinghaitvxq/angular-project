(function () {
    var app=angular.module('course',[]);
    app.controller('formController',function () {
        this.courseList=courseList;
        this.addCourse=function (course) {
            console.log(course);
            courseList.push(course);
        }
    });
    var courseList=[{
        "name":"test",
        "category":"javascript",
        "image":"image/timg.jpg",
        "des":"hello world",
        "time":"5.0"
    }];
})();