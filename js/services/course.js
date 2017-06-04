/**
 * Created by yunxi on 2017/6/4.
 */
angular.module("app")
.factory("Course  ",function CourseFactory($http) {
    return{
        allintro:function () {
            return  $http({
                method:'GET',
                url:"/angular-project/data/intro.json"
            });
        }
    }
});