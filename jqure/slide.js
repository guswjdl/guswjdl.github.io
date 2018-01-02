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

$('.w_slide_btn').click(function(e){
    e.preventDefault();
    var list = $('.w_slide');
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