angular.module("app")
.controller("IntroController",function ($http,Course) {
    var controller=this;
    Course.allintro()
        .then(function (data) {
        controller.words=data.data.words;
        controller.clist=data.data.clist;
    });
})
.controller("DescController",function ($http,$routeParams,Course) {
       var controller=this;
       Course.allintro()
       .then(function (data) {
           var name=$routeParams.name;
           data.data.clist.forEach(function (val,index,obj) {
               if(val.name===name){
                   controller.desc=val.description;
               }
           });
     
       })
    });