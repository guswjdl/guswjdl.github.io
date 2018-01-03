/*이벤트슬라이드*/
$(function(){
    
    $("#bxslider").bxSlider( {
         pagerCustom: '#bx-pager' ,
         auto: true,
         controls: false
    })


$(document).on('click' , '.bx-prve, .bx-next , #bx-pager a', function(){
                
                slider.stopAuto();
                slider.startAuto();
            });


/* Go TOP*/

			// Show or hide the sticky footer button
			$(window).scroll(function() {
				if ($(this).scrollTop() > 200) {
					$('.go-top').fadeIn(200);
				} else {
					$('.go-top').fadeOut(200);
				}
			});
			
			// Animate the scroll to top
			$('.go-top').click(function(event) {
				event.preventDefault();
				
				$('#war').animate({"transform": "translate3d(0%,0%,0%)" }, 300);
			})



// 메뉴
    
//브라우저 창에 스크롤바가 움직이면
            $(window).scroll(function(){
                //함수를 실행해라
//                console.log( $(this).scrollTop() );
                //세로스크롤바 위치값이 300이상이라면
                if( $( this ).scrollTop() >=300  ){
                    //nav영역에 fixed_menu 클래스 추가
                    $( 'nav' ).addClass('fixed_menu');
                    //300보다 작으면 nav영역에fixes_menu클래스 제거
                }else{
                    $( 'nav' ).removeClass('fixed_menu');
                }
                $( window ).mousewheel(function (e,delta){
                
                console.log(delta);                
            });
            });
        

      
/* 제품 패키지 */
$('.slide_btn').click(function(e){
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
$('.w_slide_btn').click(function(e){
    e.preventDefault();
    var list = $('.w_slide');
    var target = list.find('li').eq(0);
    
    //1번방법
    list.find('ul').append(target);
    

        }); 
    
    // 페이지 스크롤
    
    $( '#war' ).onepage_scroll( {
                
                sectionContaner : '.section' ,
                easing : 'ease' , 
                animationTime : 1000,
                loop : false , 
//                pagination : false
            })
    
    });
