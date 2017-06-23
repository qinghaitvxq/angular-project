/**
 * Created by yunxi on 2017/6/4.
 */
angular.module("app")
.factory("Course",function CourseFactory($http) {
    return{
        allintro:function () {
            return  $http({
                method:'GET',
                url:"/angular-project/courseListDemo/data/intro.json"
            });
        }
    }
})
.factory("Category",function CategoryFactory($http) {
   return{
       allCategory:function () {
           return $http({
               method:'GET',
               url:"/angular-project/courseListDemo/data/category.json"
           });
       }
   }
});