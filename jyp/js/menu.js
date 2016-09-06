$(function(){
    
      
            
             $(window).resize(function(){
                 
	               if($(window).width() > 769){
	                   $('.nav ul').css({'display':'block'})
	               }else{
	                   $('.nav ul').css({ 'display':'none'})
	                  
	               }
                }),
                
            $('.nav .toggle').click(function(){
                
                    // $('.nav ul').toggle(1000)
                    // $('.nav ul').fadeOut().css({'display':'block'})
                
                    
                if(!$('.nav ul').is('.on')){
                      $('.nav ul').addClass('on').fadeIn()
                      $(this).text('Close Menu')
                  }else if($('.nav .menu').is('.on')){
                      $('.nav .menu').removeClass('on').fadeOut()
                      $(this).text('Main Menu')
                  }
                  
                  
                   
        
                })
                
            })   