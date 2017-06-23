/**
 * Created by yunxi on 2017/6/3.
 */
(function () {
    var app=angular.module('course',[]);
    app.directive("courseList",function () {
        return{
            restrict:'E',
            templateUrl:"/angular-project/courseListDemo/template/course-list.html"
        }
    });
    app.directive("courseSelect",function (Category) {
        return{
            restrict:'E',
            templateUrl:"/angular-project/courseListDemo/template/course-select.html",
            replace:true,
            scope:{
                activeCategory:"="
            },
            controller:function ($scope) {
                this.getActiveCategory=function () {
                    return $scope.activeCategory;
                }
                this.setActiveCategory=function (category) {
                    $scope.activeCategory=category.name;
                }
            },
            link:function(scope,element,attrs){
            Category.allCategory().then(function (data) {
               scope.category=data.data;
            });
          }
        }
    });
    app.directive("courseSelectItem",function () {
        return{
            restrict:'E',
            templateUrl:"/angular-project/courseListDemo/template/course-select-item.html",
            replace:true,
            scope:{
                category:"="
            },
            require:"^courseSelect",
            link:function (scope,element,attrs,courseSelectCtrl) {

               scope.makeActive=function () {
                   console.log('active');
                   courseSelectCtrl.setActiveCategory(scope.category);
               }
               scope.categoryActive=function () {
                   return courseSelectCtrl.getActiveCategory()===scope.category.name;
               }
            }
        }
    });
    app.directive("title",function ($timeout) {
        return function (scope,element) {
            $timeout(function () {
                $(element).tooltip({container:"body"});
            });

        }
    });
})();