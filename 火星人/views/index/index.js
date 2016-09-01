/**
 * Created by hxsd on 2016/8/22.
 */

myapp.controller("indexCtrl",function($scope){
    $scope.qiandao= false;
    $scope.qian=function(){
        console.log($scope.qiandao);
        $scope.qiandao= true;
        $scope.qiandaoo=true;
    };
    $scope.qiann=function(){
        $scope.qiandaoo=false;
    };

});