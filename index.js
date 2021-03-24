$(document).ready(function () {
    var t = null;
    t = setTimeout(time, 0); //開始运行
    function time() {
        clearTimeout(t); //清除定时器
        dt = new Date();
        var h = dt.getHours(); //获取时
        var m = dt.getMinutes(); //获取分
        var s = dt.getSeconds(); //获取秒

        $(".indo_tab_clock #p").html(todouble(h) + ":" + todouble(m));
        t = setTimeout(time, 1000); //设定定时器，循环运行
    }

    function todouble(a) {
        return a >= 10 ? a : "0" + a;
    }
    var ifopenapp = false
    $('.fapp').click(function () {
        ifopenapp = true
        $('.appcon').css({
            'display': 'block',
            'animation': "open 0.2s ease-in-out",
            "animation-fill-mode": "forwards",
        })
        $('.main_cont').css({
            animation: "bgscale 0.2s ease-in-out",
            "animation-fill-mode": "forwards",
        })
        $('.footer').css({
            animation: "footerscale  0.2s ease",
            "animation-fill-mode": "forwards",

        })
        $('.footer_appicon').css({
            animation: "footer_appsmall 0.2s ease",
            "animation-fill-mode": "forwards",
        })
        // $('.info_tab').css({'color':'#000'})

    })

    $('.homebtn').click(function () {
        if (ifopenapp) {
            // setTimeout(function () { $('.appcon').css({
            //     'display': 'none',
            // }) },500)
            $('.appcon').css({
                'display': 'none',
                'animation': "open 1s reverse ease-in-out",

            })
            $('.main_cont').css({
                animation: "bgscale 0.2s reverse ease-in-out ",

            })
            $('.footer').css({
                animation: "footerscale 0.2s reverse ease",

            })
            $('.footer_appicon').css({
                animation: "footer_appsmall 0.2s reverse ease",
            })
            ifopenapp = false
        }

    })

    var startX = 0
    var endX = 0
    $('.startupPage').mousedown(function (event) {
        startX = event.clientX;
        startY = event.clientY;
    });
    $('.startupPage').mouseup(function (event) {
        endX = event.clientX;
        endY = event.clientY;
        if (startX > endX) {

            $('.allPage').css({
                left: -100 + "%",
            });
            // setTimeout(function () {
            //     $("#cover").css({
            //         display: "none"
            //     });
            //     $("#showtime").css({
            //         animation: "showtimeTween 1s ease-in-out",
            //         "animation-fill-mode": "forwards",
            //     });
            //     $('header nav').css({
            //         opacity: "100"
            //     });
            // }, 1000);
        }
        // $('.startupPage').removeEventListener("mousedown", this);
        // $('.startupPage').removeEventListener("mousemove", this);
    })

    var guionestartX = 0
    var guioneendX = 0
    $('.guione').mousedown(function (event) {
        guionestartX = event.clientX;
        guionestartY = event.clientY;
       
    });
    $('.guione').mouseup(function (event) {
        guioneendX = event.clientX;
        guioneendY = event.clientY;
        if (guionestartX > guioneendX) {

            // $('.guitwo').css({
            //     left: 0 + "%",
            // });
            // $('.guithree').css({
            //     left: 100 + "%",
            // });
            $('.guideimgbox').css({
                left:-100+"%"
            })
            let $li = $(".guideimgdot>li").eq(1);
            // 1.5隐藏非当前的其它图片
            $li.siblings().removeClass("dotactive");
            // 1.6显示对应的图片
            $li.addClass("dotactive");

        }

    })


    var guitwostartX = 0
    var guitwoendX = 0
    $('.guitwo').mousedown(function (event) {
        guitwostartX = event.clientX;
        guitwostartY = event.clientY;

    });
    $('.guitwo').mouseup(function (event) {
        guitwoendX = event.clientX;
        guitwoendY = event.clientY;
        if (guitwostartX > guitwoendX) {

            $('.guideimgbox').css({
                left:-200+"%"
            })
            let $li = $(".guideimgdot>li").eq(2);
            // 1.5隐藏非当前的其它图片
            $li.siblings().removeClass("dotactive");
            // 1.6显示对应的图片
            $li.addClass("dotactive");


        }

    })

    $('.guithree').click(function(){
        $('.allPage').css({
            left: -200 + "%",
        });
    })

})