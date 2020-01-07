$(document).ready(function () {
    //fadeInUp 효과
    var scrollY = 0; //윈도우 상단좌표값
    var timer = 0; //한번만 실행시키기 위한 변수
// .cnt2
    $(window).on("scroll", function () {
        clearTimeout(timer);

        timer = setTimeout(function () {
            scrollY = $(this).scrollTop();
            console.log(scrollY);

            $(".fade").each(function () {
                if (scrollY > $(this).offset().top - 600) $(this).stop().animate({
                    opacity: 1,
                    '-ms-filter': '"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)"',
                    top: 0
                });
                else $(this).stop().animate({
                    opacity: 0,
                    '-ms-filter': '"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)"',
                    top: 40
                }); 
            });
            $(".cnt2").each(function() {
                if (scrollY > 400) $('.cnt2_top').addClass('bgchange');
                else $('.cnt2_top').removeClass('bgchange');
            });
            $(".cnt2").each(function() {
                if (scrollY > 600) $('.cnt2_btm').addClass('bgchange');
                else $('.cnt2_btm').removeClass('bgchange');
            });
        }, 100);
    }); 
    
    // cnt1
    var j = 0;
    setInterval(function () {
        j++;
        // console.log(j);
        $(".cnt1").each(function() {
            if (j > 0) $('.txtbox').addClass('bgchange');
            else $('.txtbox').removeClass('bgchange');
        });
    }, 1000);

    /* setInterval(function () {
        j++;
        console.log(j);
        $(".cnt2").each(function() {
            if (j > 5) $('.cnt2_top').addClass('bgchange');
            else $('.cnt2_top').removeClass('bgchange');
        });
    }, 1000); */

    
});