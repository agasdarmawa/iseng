//jquery-click-scroll
//by syamsul'isul' Arifin

var sectionArray = [1, 2, 3, 4, 5, 6];

$.each(sectionArray, function(index, value){
          
     $(document).scroll(function(){
         var offsetSection = $('#' + 'section_' + value).offset().top;
         var docScroll = $(document).scrollTop();
         var docScroll1 = docScroll + 1;
         
        
         if ( docScroll1 >= offsetSection ){
             $('a').removeClass('active');
             $('a:link').addClass('inactive');  
             $('a').eq(index).addClass('active');
             $('a:link').eq(index).removeClass('inactive');

             
         }
         
     });
    
    $('a').eq(index).click(function(e){
        var offsetClick = $('#' + 'section_' + value).offset().top;
        e.preventDefault();
        $('html, body').animate({
            'scrollTop':offsetClick
        }, 800)
        
        
    });
 
    
});

$(document).ready(function(){
    $('a:link').addClass('inactive');    
    $('a').eq(0).addClass('active');
    $('a:link').eq(0).removeClass('inactive');
});
