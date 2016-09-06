$(function(){
    $('.visual .coffee-img').fadeIn(1000);
    
    $(window).scroll(function(){
            
            var a = $(this).scrollTop()
            
            // console.log(a)
            
            if(a<110){
                if($('.header-black-bg').attr('class') == 'header-black-bg in'){
                $('header').removeClass('fixed');
                $('.header-black-bg').slideUp().removeClass('in');
                }
            }else if(a>111){
                if($('.header-black-bg').attr('class') != 'header-black-bg in')
                $('header').addClass('fixed');
                $('.header-black-bg').slideDown().addClass('in');
            }
            
            
            if(a > 533){
                if($('.tit-left').attr('class') != 'tit-left exe'){
                $('.scroll-fadein').fadeIn(1000);
                $('.tit-left').css({
                    'opacity': 0,
                    'margin-top':500+'px'
                }).stop().animate({
                    'margin-top':0+'px',
                    'opacity':1
                },1000).addClass("exe");
                }
                
            if(a>633){
                if($('.story-list').attr('class') != '.story-list in')
                $('.story-list ul').children("li").eq(0).fadeIn(function  () {
					$('.story-list ul').children("li").eq(2).fadeIn();
					$('.story-list ul').children("li").eq(1).fadeIn(function  () {
						$('.story-list ul').children("li").eq(3).fadeIn();
						$('.story-list ul').children("li").eq(4).fadeIn(function() {
						    $('.real-brew-btn').fadeIn();
						});
					}).addClass('in');
				});
            }
                
            }
    })
    
       function findR(target){
            var aa = target.attr('class');
            
            if( aa.indexOf('rotated') == -1 ){
                target.addClass('rotated')
            }else {
                target.removeClass('rotated')
            }
        }
        
    $('.quickFlip').click(function(){
        findR($(this).children('div').eq(0));
        findR($(this).children('div').eq(1));
        
        return false;
        
        
    })
    
    $('.quickbar .quick-icon3').click(function(){
        
        $('html,body').animate({
                    scrollTop:0
                })
        return false;
    })
   
    
    var spot = [];
    var spotin = [];
    
    $('section').each(function(){
        
        spot.push($(this).offset().top);
        spotin.push($(this).offset().top + $(this).height());
               
    })
    
     $('.gnb ul li a').click(function(){
                
        
                var idx = $(this).parent().index();
                
                $('html,body').animate({
                    scrollTop:spot[idx]-65
                })
                
               return false;  
    
     });
     
     $(window).scroll(function(){
         
                var sct = $(this).scrollTop();
                console.log(spot,spotin)
                    
                    $('section').each(function(i){
                        
                        if(sct >= spot[i]-70 && sct <= spotin[i]-70){
                            
                            $('.gnb ul li').eq(i).children().addClass('on')
                        }else{
                            $('.gnb ul li').eq(i).children().removeClass('on')
                        }
                        
                    })
                    
                    return false;
                })
    
    $('.modal-open').click(function(){
        
        $('#modalBg').fadeIn();
        $('#storyLayerCon').fadeIn();
        
        return false;
    })
    
    $('.modal-close').click(function(){
        
        $('#modalBg').fadeOut();
        $('#storyLayerCon').fadeOut();
        
        
        return false;
    })
    
    
            
            


})
