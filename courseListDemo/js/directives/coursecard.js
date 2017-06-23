/**
 * Created by yunxi on 2017/6/4.
 */
(function () {
    var app=angular.module('card',[]);
    app.directive("courseCard",function () {

        return{
            restrict:'E',
            templateUrl:"/angular-project/courseListDemo/template/coursecard.html",
            link:function (scope,element) {
               element.on('click',function () {
                  element.find('p').toggleClass("hidden").append('<p>does it work?</p>');
               });
            }
        }
    });
})();