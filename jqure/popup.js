$(function() {
  
    //글을 누르면 함수 실행
    $('#popup').after().click(function() {
        
        //bgArea를 보여줌 (실제로 보이진 않음 투명도가0이라서)
        $('#befor_box').show();
        
        //bgArea를 서서히 나타냄
        $('#befor_box').animate( { 'opacity':1 },1000, "easeOutExpo" );
        
        //popup영역을 서서히 원본비율로 키움
        $('.popup').transition( { 
            'translate':'-50%, -50%' ,
            'scale':1            
        },1000, "easeOutExpo" );
        
        //#instaArea크기를 70%로 줄이는 애니매이션 
//        $('#instaArea').transition( {  
//            'translate' : '-50%, -50%',
//            'scale': 0.7
//        },1000, "easeOutExpo" );
        
        //body 선의 두께를 50px로 늘리는 애니매이션 
//        $('body').animate( { 'border-width' : 50 },1000, "easeOutExpo" );
        
        //클릭한것의 이전요소가 가지는 텍스트값을 가져옴 
        $('.popup').text( $(this).find('p').text() );
    });
});

