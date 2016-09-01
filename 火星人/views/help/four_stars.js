/**
 * Created by hxsd on 2016/8/22.
 */

myapp.controller("four_starsCtrl", function($scope){

    $scope.star_show=false;
    $scope._star = [];
    $scope.message = "";

    $scope.star_modal=function(){

        $scope.star_show=true;
    };
    $scope.back_star=function(){

        $scope.star_show=false;
    };
    $scope.setFenshu = function(i){
        for(var j = 0; j < i; j++) {
            $scope._star[j] = "ac";
        }
        for(var k = 3; k > i - 1; k--){
            $scope._star[k] = "";
        }
        if(i==1){
            $scope.message = "差评";
        }
        if(i==2){
            $scope.message = "一般";
        }
        if(i==3){
            $scope.message = "好";
        }
        if(i==4){
            $scope.message = "非常好";
        }

    };

});