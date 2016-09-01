
myapp.controller("pictrealbumsCtrl",function($scope,$http){

    var url = "views/picture/picture-albums.json";

    $http.get(url).success(function(data){
        $scope.images = data;

    })
});
