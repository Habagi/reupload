$(function(){

    // header js

    $('button.menu').click(function(){
        $('header nav').toggle();
    })

    $(window).resize(function(){
           if($(window).width() > 769){
                   $('header nav').css({'display':'inline-block'})
               }else{
                   $('header nav').css({ 'display':'none'})

           }
    })


  $('.portlist li a').mouseenter(function(){
      $(this).children('.over').addClass('on')
    }).mouseleave(function(){
        $(this).children('.over').removeClass('on')
    })


    function movement(start,end,idx){
        $('.container section').eq(idx).css({
            'left':start,
            'display':'block'
        }).animate({
            left:end
        })



    }



    var idx = 0;
    $('header nav ul li a').click(function(){
        movement('0','-100%',idx);
        idx = $(this).parent().index();
        if(idx == 1){
            	$('.skillbar').each(function(){
            		$(this).find('.skillbar-bar').animate({
            			width:$(this).attr('data-percent')
            		},2000);
                    });
        }
        movement('100%','0',idx);



        return false
    })



          $('.btngroup .next').click(function(){

            movement('0','-100%',idx);
           idx++
           if(idx == 1){
            	$('.skillbar').each(function(){
            		$(this).find('.skillbar-bar').animate({
            			width:$(this).attr('data-percent')
            		},2000);
                    });
        }
            movement('100%','0',idx);

            if(idx == 3){
                idx = 0
                movement('100%','0',idx);

            }

         })

         $('.btngroup .prev').click(function(){

             movement("0","100%",idx);
            idx --
            if(idx == 1){
            	$('.skillbar').each(function(){
            		$(this).find('.skillbar-bar').animate({
            			width:$(this).attr('data-percent')
            		},2000);
                    });
        }
            movement("-100%","0",idx);

            if(idx < 0){
                idx = $('section').length -1;
                movement("-100%","0",idx)
                console.log(idx)
            }
         })

})
