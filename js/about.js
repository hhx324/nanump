$(document).ready(function () {
    // cnt1
    var scrollY = 0; //윈도우 상단좌표값
    var timer = 0; //한번만 실행시키기 위한 변수
    // .cnt2
    var j = 0;
    setInterval(function () {
        j++;
        console.log(j);
        $(".cnt1").each(function() {
            if (j > 2) $('.after').addClass('bgchange');
            else $('.after').removeClass('bgchange');
        });
    }, 1000);

    $(window).on("scroll", function () {
        clearTimeout(timer);

        timer = setTimeout(function () {
            scrollY = $(this).scrollTop();
            console.log(scrollY);

            $(".fade").each(function () {
                if (scrollY > $(this).offset().top - 600) $(this).stop()
                    .animate({
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
         <!--Initialize Swiper-- >
        var galleryThumbs = new Swiper('.gallery-thumbs', {
            spaceBetween: 10,
            slidesPerView: 4,
            loop: true,
            freeMode: true,
            loopedSlides: 5, //looped slides should be the same
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
          });
          var galleryTop = new Swiper('.gallery-top', {
            spaceBetween: 10,
            loop:true,
            loopedSlides: 5, //looped slides should be the same
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            thumbs: {
              swiper: galleryThumbs,
            },
          });

        var swiper = new Swiper('.cnt2 .swiper-container', {
            effect: 'flip',
            grabCursor: true,
            pagination: {
              el: '.swiper-pagination',
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
    });
});