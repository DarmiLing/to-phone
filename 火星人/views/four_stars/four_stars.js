/**
 * Created by hxsd on 2016/8/22.
 */

myapp.controller("four_starsCtrl", function($scope){

    //$scope.star_show=false;
    $scope._star = [];

    $scope.star_modal=function(){
        console.log("a");
        $scope.star_show=true;
    };
    $scope.setFenshu = function(){
        $scope._star[0] = "ac";
        alert("a");
        console.log($scope._star[0]);
    }
    alert("a");
});