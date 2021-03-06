$(function () {

    /*이벤트슬라이드*/
    var slider = $("#bxslider").bxSlider({
        pagerCustom: '#bx-pager',
        auto: true,
        controls: false,
    })

    $(document).on('click', '.bx-prve, .bx-next , #bx-pager a', function () {

        slider.stopAuto();
        slider.startAuto();
    });

    //play부분 

    //메뉴를 클릭하면 함수 실행    
    $('.tab_area').click(function (e) {

        //a태그의 기본동작을 막아줌
        e.preventDefault();

        //클릭한 a태그의 부모요소에 엑티브 클레스 추가
        $(this).addClass('active');


        $('.vo_btn').removeClass('.ph_btn');

    });



    // play 탭 선택 화살표

    //#btn_group div 클릭햇을때 함수 실행
    $('.vo_btn, .ph_btn').click(function () {

        //클릭한 div는 on클래스 추가
        $(this).addClass('active');

        //#btn_group div중에서 클릭하지 않은건 on클래스 제거 
        $('.vo_btn, .ph_btn').not(this).removeClass('active');
        $('.arrow').stop().animate({
            'top': $(this).position().top + 100
        }, 1000, 'easeOutExpo');
        
        //
        $('#dan_av').toggle();
//        $('.m_box div').not($('.m_box div').eq($(this).index())).hide();

    });



    // 트와이스 사진 슬라이드
        var slider2 = $(".t_slider").bxSlider({
        auto: true,
        controls: false,
        pager: false
    })



    /* Go TOP*/

    // Animate the scroll to top
    $('.go-top').click(function (event) {
        event.preventDefault();

        $('html,body').animate({
            "scrollTop": 0
        }, 300);
    })



    // 메뉴

    //브라우저 창에 스크롤바가 움직이면
    $(window).scroll(function () {
        //함수를 실행해라
        //                console.log( $(this).scrollTop() );
        //세로스크롤바 위치값이 300이상이라면
        if ($(this).scrollTop() >= $(this).height() - 100) {
            //nav영역에 fixed_menu 클래스 추가
            $('.gnb').addClass('fixed_menu');
            //300보다 작으면 nav영역에fixes_menu클래스 제거
        } else {
            $('.gnb').removeClass('fixed_menu');
        }

    });


    $(window).mousewheel(function (e, delta) {

        // html,body가 움직이는 상태면 함수강제종료
        if ($('html,body').is(':animated')) {
            return;
        }

        // delta값이 0보다 크면 ( 마우스 휠을 위로 굴렷을때)
        if (delta > 0) {

            $('#gnb').animate({
                'scrollTop': '-=' + $(this).height()
            }, 1000, "easeOutExpo");

            // delta값이 0보다 작으면 ( 마우스 휠을 아래로 굴렸을때)
        } else {

            $('#gnb').animate({
                'scrollTop': '+=' + $(this).height()
            }, 1000, "easeOutExpo");

        }


    });



    /* 제품 패키지 */
    $('.slide_btn').click(function (e) {
        e.preventDefault();
        var list = $('.package_image_inner');
        var target = list.find('li').eq(0);

        //1번방법
        list.find('ul').append(target);

        //2번방법
        //        var height = target.height();
        //        list.animate({
        //            top: '-'+height
        //        }, 300, function(){
        //            $(this).find('ul').append(target);
        //            $(this).removeAttr('style');
    });
    //});

    /* 물결*/
    $('.w_slide_btn').click(function (e) {
        e.preventDefault();
        var list = $('.w_slide');
        var target = list.find('li').eq(0);

        //1번방법
        list.find('ul').append(target);


    });


    //메뉴선택

    //#btn_group div 클릭햇을때 함수 실행
    $('.gnb li a').click(function () {

        //클릭한 div는 on클래스 추가
        $(this).addClass('on');


        //#btn_group div중에서 클릭하지 않은건 on클래스 제거 
        $('.gnb li a').not(this).removeClass('on');

    });
});