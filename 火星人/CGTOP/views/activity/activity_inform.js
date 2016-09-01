/**
 * Created by hxsd on 2016/8/18.
 */
myapp.controller("activity_informCtrl", function($scope,$http){
    var url="json/activity_inform/activity.json";
    $http.get(url).success(function(data){
        console.log("success");
        $scope.activity=data;
    }).error(function(){
        console.log("error");
    });
    $scope.alertBlack=function(){
        $scope.showblack=true;
        $scope.showxz=true;
    }
});