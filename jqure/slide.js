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


/* 퀵메뉴*/
$(function(){
          
            //브라우저 창의  스크롤이 움직이면 함수 실행
            $(window).scroll(function(){
              
                $('aside').stop().animate( { 'top' : $(this).scrollTop() + 250 } , 500 , 'easeOutExpo' );
            }); 
            
            // a태그의 기본속성을 잡아줌
            $('a').click(function(e){
              
                e.preventDefault();
                
                $('html,body').stop().animate( { 'scrollTop' : $(this.hash).offset().top }, 500, 'easeOutExpo' );
            });
        });
            
      
/* 제품 페키지 */
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
