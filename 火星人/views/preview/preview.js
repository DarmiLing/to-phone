myapp.controller("previewCtrl",function($scope,$http){

    var url = "views/preview/preview.json";

    $http.get(url).success(function(data){
        $scope.images = data;
    });
});
