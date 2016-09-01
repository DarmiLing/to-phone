/**
 * Created by hxsd on 2016/8/18.
 */
myapp.controller("headportraitCtrl",function($scope){

    $scope.porrtrait = function(){
        console.log("dfadfasdfas");

        $scope.showModel = true;
        $scope.showRevamp = true;
    };
    $scope.exit = function(){
        $scope.showModel = true;
        $scope.showExit = true;
    };

    $scope.off = function(){
        $scope.showModel = false;
        $scope.showExit = false;
    };

    $scope.shutsdown = function(){
        $scope.showModel = false;
        $scope.showExit = false;
    };

    $scope.select = function(){
        $scope.showModel = false;
        $scope.showRevamp = false;
        $scope.showExit=false;
    };
/*
 $scope.select3 = function(){
        $scope.showModel = false;
        $scope.showRevamp = false;

    };
*/


});