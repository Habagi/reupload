$(function() {

   $('#video-list li a').click(function(){

                var url = $(this).attr('href');
                console.log(url)
                var location = 'https://www.youtube.com/embed/'+url+'?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen'

                $('.movie iframe').attr('src',location)




                return false;
            });




});
