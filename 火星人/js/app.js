/**
 * Created by hxsd on 2016/8/17.
 */
var myapp=angular.module("myapp",["ionic"]);

myapp.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state("index",{
        url:"/index",
        templateUrl:"views/index/index.html",
        controller:"indexCtrl"
    });
    $stateProvider.state("log_in",{
        url:"/log_in",
        templateUrl:"views/log_in/log_in.html"
    });
    $stateProvider.state("new_password",{
        url:"/new_password",
        templateUrl:"views/new_password/new_password.html"
    });
    $stateProvider.state("five_star",{
        url:"/five_star",
        templateUrl:"views/five_star/five_star.html"
    });
    $stateProvider.state("log",{
        url:"/log",
        templateUrl:"views/log/log.html"
    });

    $stateProvider.state('CGTOP',{
        url:'/CGTOP',
        templateUrl:"views/CGTOP/CGTOP.html",
        controller:"CGTOPCtrl"
    })
        .state('CGTOP_flow',{
            url:"/CGTOP_flow",
            templateUrl:"views/CGTOP/CGTOP_flow.html",
            controller:"CGTOP_flowCtrl"
        })
        .state('CGTOP_play',{
            url:"/CGTOP_play",
            templateUrl:"views/CGTOP/CGTOP_play.html",
            controller:"CGTOP_playCtrl"
        })
        .state('activity_inform',{
            url:"/activity_inform",
            templateUrl:"views/activity/activity_inform.html",
            controller:"activity_informCtrl"
        })
        .state('activity_particular',{
            url:"/activity_particular",
            templateUrl:"views/activity/activity_particular.html",
            controller:"activity_particularCtrl"
        })
        .state('campus_broadcast',{
            url:"/campus_broadcast",
            templateUrl:"views/campus_broadcast/campus_broadcast.html",
            controller:"campus_broadcastCtrl"
        })
        .state('campus_particular',{
            url:"/campus_particular",
            templateUrl:"views/campus_broadcast/campus_particular.html",
            controller:"campus_particularCtrl"
        })
        .state('mail',{
            url:"/mail",
            templateUrl:"views/mail/mail.html",
            controller:"mailCtrl"
        })





        .state("headportrait",{
            url:"/headportrait",
            templateUrl:"views/set_head_portrait/headportrait.html",
            controller:"headportraitCtrl"

        })
        .state("set-shot",{
            url:"/set-shot",
            templateUrl:"views/set/set-shot.html",
            controller:"setshotCtrl"

        })
        .state("set-photograph",{
            url:"/set-photograph",
            templateUrl:"views/set/set-photograph.html",
            controller:"setphotographCtrl"

        })
        .state("set-pictureset",{
            url:"/set-pictureset",
            templateUrl:"views/set/set-pictureset.html",
            controller:"setpicturesetCtrl"

        })
        .state("set_password",{
            url:"/set_password",
            templateUrl:"views/set_password/set_password.html",
            controller:"setpasswordCtrl"

        })
        .state("picture-albums",{
            url:"/picture-albums",
            templateUrl:"views/picture/picture-albums.html",
            controller:"pictrealbumsCtrl"

        })
        .state("preview",{
            url:"/preview",
            templateUrl:"views/preview/preview.html",
            controller:"previewCtrl"

        });


    $stateProvider.state("index_littlebro",{
        url:"/index_littlebro",
        templateUrl:"views/index_littlebro/index_littlebro.html"
    });
    $stateProvider.state("Peking_Opera",{
        url:"/Peking_Opera",
        templateUrl:"views/Peking_Opera/Peking_Opera.html"
    });
    $stateProvider.state("search_name",{
        url:"/search_name",
        templateUrl:"views/search_name/search_name.html"
    });
    $stateProvider.state("Peking_Opera2",{
        url:"/Peking_Opera2",
        templateUrl:"views/Peking_Opera2/Peking_Opera2.html",
        controller: "Peking_Opera2"
    });
    $stateProvider.state("help",{
        url:"/help",
        templateUrl:"views/help/help.html",
        controller:"four_starsCtrl"
    });
    $stateProvider.state("helpend",{
        url:"/help",
        templateUrl:"views/help/helpend.html"
    });
    $stateProvider.state("my_grades",{
        url:"/my_grades",
        templateUrl:"views/my_grades/my_grades.html",
        controller:"my_gradesCtrl"
    });
    $stateProvider.state("task_grades",{
        url:"/task_grades",
        templateUrl:"views/task_grades/task_grades.html",
        controller:"task_gradesCtrl"
    });
    $stateProvider.state("professional",{
        url:"/professional",
        templateUrl:"views/professional/professional.html"
    });

    $urlRouterProvider.otherwise("/log");
});

angular.module("myapp").controller("myCtrl",function($scope,$http,$timeout){
    $scope.help = [];
    $scope.upNumber = function (num) {
        if(num<10){
            return "0"+num;
        }else{
            return ""+num;
        }
    };
    $scope.askForHelp = function () {
        var time = new Date();
        var year = time.getFullYear();
        var month = time.getMonth()+1;
        var day = time.getDate();
        var hour = $scope.upNumber(time.getHours());
        var minute = $scope.upNumber(time.getMinutes());
        var help1={
            "time":hour +"：" +minute,
            "date":year +"/" + month + "/" + day,
            "state":"处理中",
            "assess":"评价"
        };
        $scope.help.push(help1);
    };

    $scope.refresh_fiveStar = function(){
        // 向服务器端请求新的数据，替换掉现有的数据
        $http.get("json/fiveStar.json").success(function(data){
            $scope.fiveStars = data;
        }).finally(function(){
            // 通知框架，刷新结束，停止显示图标
            $scope.$broadcast("scroll.refreshComplete");
        });
    };
    $scope.refresh_fiveStar();

    $scope.loadMore = function(){
        // 向服务器端请求一页新的数据，追加到现有数据之后
        $http.get("json/fiveStar.json").success(function(data){
            // 使用Array的原型方法push; 等价于  $scope.products.push(data)
            Array.prototype.push.apply($scope.fiveStars,data);
        }).finally(function(){
            // 通知框架，加载结束，停止显示图标
            $scope.$broadcast("scroll.infiniteScrollComplete");
        });
    };
    $scope.loadMore();


});

