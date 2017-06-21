/**
 * Created by yunxi on 2017/6/21.
 */

(function () {
    var mainController=function ($scope) {
        $scope.test="hello World";
    }

    var mainModule=angular.module('mainModule',[]);
    mainModule.controller('mainController',mainController)

})();
