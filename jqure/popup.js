$(function() {
    
    
  
    //글을 누르면 함수 실행
    $('.popup a').click(function(e) {
        
        e.preventDefault();
        
        //bgArea를 보여줌 (실제로 보이진 않음 투명도가0이라서)
        $('#befor_box').show();
        $('#befor_box').animate( { 'opacity':1 },1000, "easeOutExpo" ); 
        
    });  

        
        $('#befor_box a').click(function(e) {
        
        e.preventDefault();
        $('#befor_box').hide();       
       
        $('#befor_box').animate( { 'opacity':1 },1000, "easeOutExpo" );
       

    });
    
     
});

