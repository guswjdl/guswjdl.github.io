$(function() {
    
    //배열생성
    var sale_arr =new Array();
    
    //0~9반복 함수
    for( var i= 0; i<10; i++ ) {
        
        
        /*------------------------------------------------------------------------------
        
                배열이름.push(값);   ->값을 배열에 밀어 넣음
                배열이름.shift();       -> 왼쪽으로 밀어냄( 첫번째 값이 사라짐 )        
        
        --------------------------------------------------------------------------------*/
        
        sale_arr.push( $( '#sale ul li' ).eq(i) );
        
        sale_arr[ i ].css( { 'left' : 160 * i } )
    }    
    
    function slide_timer(){
        
        //세일arr 배열의 첫번째값을 밀어내서 첫번째리스트 변수에 담아줌 
        var first_list = sale_arr.shift();
        
        //밀어냈던 첫번째값을 다시 sale_arr배열에 밀어 넣음( 배열의 끝에 붙음 )
        sale_arr.push( first_list );
        
        //모든 li들을 순차적 반복실행
        $( '#sale ul li' ).each( function ( i ) {
            
            // 1500으로 지정하면 중간에 텀이생김
            // 왼쪽으로 160px씩 이동을하고 재정렬
            $(this).animate( { 'top' : '-=160px' },
                            1500, "easeOutExpo" , 
                           function() {
                for( i=0; i<10; i++) {
                    sale_arr[ i ].css( { 'top' : 160 * i } );
                }
            });            
        });        
        
    }
    //2초마다 슬라이드타이머를 호출
    var timer = setInterval( slide_timer, 2000 );
          
        
    
} );