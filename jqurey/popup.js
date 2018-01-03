//$(function() {
//    
//    
//  
//    //글을 누르면 함수 실행
//    $('.popup a').click(function(e) {
//        
//        e.preventDefault();
//        
//        //bgArea를 보여줌 (실제로 보이진 않음 투명도가0이라서)
//        $('#befor_box').show();
//        $('#befor_box').animate( { 'opacity':1 },1000, "easeOutExpo" ); 
//        
//    });  
//
//        
//        $('#befor_box a').click(function(e) {
//        
//        e.preventDefault();
//        $('#befor_box').hide();       
//       
//        $('#befor_box').removeAttr('style');
//       
//
//    });
//    
//     
//});

$(function() {
    $('.popup a').click(function (e) {
        e.preventDefault();
        var taregt = $('#befor_box').fadeIn('fast');
        var btn = $(this).attr('class');
        taregt.show();
        if (btn === 'btn_beby') {
            taregt.find('.beby').css('display','block');
        } else if (btn === 'btn_natural') {
            taregt.find('.nature').css('display','block');
        } else {
            taregt.find('.water').css('display','block');
        }
    });
    $('#befor_box a').click(function(e) {
        e.preventDefault();
        var taregt = $('#befor_box').fadeOut('fast');
        taregt.find('.more').removeAttr('style');
    });
});

