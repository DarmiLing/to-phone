/**
 * Created by hxsd on 2016/8/19.
 */
myapp.controller("activity_particularCtrl", function($scope,$http){
    $scope.fenxiang=function(){
        $scope.showPopup2=true;
        $scope.showModel=true;
    }
    $scope.showCancel=function(){
        $scope.showPopup2=false;
        $scope.showModel=false;
    }

});