//window.onload=function(){
//    var oBtn=document.getElementsByTagName("button");
//    var modal=document.getElementById('_modal');
//    var share=document.getElementById('_share');
//    var onBtn=document.getElementById('_Btn');
//    var oLink=document.getElementById('_link');
//
//    oBtn[0].onclick=function(){
//        share.style.display =modal.style.display="block";
//        popShow(share);
//
//    };
//    onBtn.onclick=function(){
//        share.style.display=modal.style.display="none";
//    };
//    oBtn[1].onclick=function(){
//        popShow(oLink);
//        if(window.navigator.onLine==true){
//            setInterval(function(){oLink.style.display="none"},3000)
//        }
//    };
//
//
//    function popShow(elm){  //µ¯¿ò¾ÓÖÐ
//        elm.style.display="block";
//        var l=(document.documentElement.clientWidth-elm.offsetWidth)/2;
//        var t=(document.documentElement.clientHeight-elm.offsetHeight)/2;
//
//        elm.style.left=l+"px";
//        elm.style.top=t+"px";
//    }
//};
myapp.controller("task_gradesCtrl",function($scope){

    $scope.bbn=function(){
        $scope.cjfirm=true;
    };
    $scope.bbn_1=function(){
        $scope.cjfirm=false;
    };
    $scope.bbnn=function(){
        $scope._link=true;
        setTimeout(function(){
            $scope._link=false;
        },1000)
    };

});