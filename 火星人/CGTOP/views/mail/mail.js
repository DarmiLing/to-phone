/**
 * Created by Administrator on 2016/8/19 0019.
 */
myapp.controller("mailCtrl", function($scope,$http){
    var url="json/campus_broadcast/campus_broadcast1.json";
    $http.get(url).success(function(data){
        console.log("success");
        $scope.campus=data;
    }).error(function(){
        console.log("error");
        $scope.nomailfirm=true;

    });
    });