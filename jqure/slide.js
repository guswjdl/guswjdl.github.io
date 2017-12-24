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
    

    
    
});