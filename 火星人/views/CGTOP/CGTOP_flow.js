/**
 * Created by hxsd on 2016/8/18.
 */
myapp.controller("CGTOP_flowCtrl", function($scope){
    $scope.test = function(){
        // 你要实现一个什么效果？ 再这里写就好了
        $scope.showConfirm = true;
        $scope.showModel=true;
    };
    $scope.Cancel=function(){
        $scope.showConfirm = false;
        $scope.showModel=false;
    }

    $scope.Confirm=function(){
        $scope.showConfirm = false;
        $scope.showModel=false;
    }
});