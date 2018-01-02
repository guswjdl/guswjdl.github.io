/*이벤트슬라이드*/
$(function(){
    
    $("#bxslider").bxSlider( {
         pagerCustom: '#bx-pager' ,
         auto: true,
         controls: false
    })
});

$(document).on('click' , '.bx-prve, .bx-next , #bx-pager a', function(){
                
                slider.stopAuto();
                slider.startAuto();
            });


/* Go TOP*/
$(document).ready(function() {
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
				
				$('html, body').animate({scrollTop: 0}, 300);
			})
		});


// 메뉴
//$(function(){
//          
//            //브라우저 창의  스크롤이 움직이면 함수 실행
//            $(window).scroll(function(){
//              
//                $('#gnb').stop().animate( { 'top' : $(this).scrollTop() + 1 } , 1000 , 'easeOutExpo' );
//            }); 
//            
//                $('html,body').stop().animate( { 'scrollTop' : $(this.hash).offset().top }, 1000, 'easeOutExpo' );
//            });
        

      
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

 $( function() {
          
            /* ---------------------------------------------------------------------------------
            
                옵션
                
                anchors : [ '앵커이름1', '앵커이름2', ... ]                           앵커 이름
                menu : 메뉴영역의 선택자                                          선택자 이름
                
                css3 : true / false                                                      속도값 여부
                easingcss3 : easing값                                                 속도값
                
                loopTop : true / false                                                 가장 위에서 마지막
                loopBottom : true / false                                             가장 마지막에서 위
            
            ---------------------------------------------------------------------------------- */
            
            $( 'body' ).fullpage({
                
                css3 : true,
                easingcss3 : 'ease' , 
                
                menu : '.menu' ,
                anchors : [ 'page1' , 'page2' , 'page3', 'page4' ] ,
                
                loopTop : true,
                loopBottom : true
            }); 
            
            
            
            
        });
