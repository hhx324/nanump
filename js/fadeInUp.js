$(document).ready(function () {
    //fadeInUp 효과
    var scrollY = 0; //윈도우 상단좌표값
    var timer = 0; //한번만 실행시키기 위한 변수

    $(window).on("scroll", function () {
        clearTimeout(timer);

        timer = setTimeout(function () {
            scrollY = $(this).scrollTop();
            console.log(scrollY);

            $(".fade").each(function () {
                if (scrollY > $(this).offset().top - 30) $(this).stop().animate({
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
        }, 100);
    });
});