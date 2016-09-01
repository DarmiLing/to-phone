/**
 * Created by Administrator on 2016/8/17 0017.
 */
myapp.controller("CGTOPCtrl", function($scope,$http){
    var url="json/CGTOP/cgtop.json";
    $http.get(url).success(function(data){
        console.log("success");
        $scope.cgtop=data;
    }).error(function(){
        console.log("error");
        $scope.wuwangluotishifirm=true;
    });
// 无限滚动
/*    $scope.loadMore = function () {
        // 声明一个对象，代表要加载的数据
        var dataFetchedFromServer =[
            {
                "imgurl":"images/CGtop_pic_02.gif",
                "title":"创意在哪里？",
                "content":"#海报设计"
            },
            {
                "imgurl":"images/CGtop_pic_03.gif",
                "title":"奇幻森林之旅",
                "content":"#影视特效"
            },
            {
                "imgurl":"images/CGtop_img3.png",
                "title":"我们一路向前",
                "content":"#行业经验"
            }
        ];

        // 模拟网络加载过程
        setTimeout(function () {

            // 将dataFetchedFromServer对象添加到posts model
            $scope.cgtop.push(dataFetchedFromServer);
            // 发送广播消息，加载过程完成了
            $scope.$broadcast('scroll.infiniteScrollComplete');
        }, 3000);
    };*/
});

