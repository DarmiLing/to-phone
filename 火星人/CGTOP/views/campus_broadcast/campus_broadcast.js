/**
 * Created by Administrator on 2016/8/19 0019.
 */
myapp.controller("campus_broadcastCtrl", function($scope,$http){
    var url="json/campus_broadcast/campus_broadcast.json";
    $http.get(url).success(function(data){
        console.log("success");
        $scope.campus=data;
    }).error(function(){
        console.log("error");
        $scope.mywlsyfirm=true;

    });
    $scope.alertBlack=function(){
        $scope.showblack=true;
        $scope.showxz=true;
    }
    });