window.onload = function(){
    var winWidth = win.width(),
        winHeight = win.height(),
        winRatio = winWidth / winHeight;

    if(winRatio > imageRatio) {
      image.css({
        width: winWidth,
        height: winWidth / imageRatio,
        marginTop:(winHeight - winWidth / imageRatio)*0.5,
        marginLeft:0
      });
    } else {
      image.css({
        width: winHeight * imageRatio,
        height: winHeight,
        marginTop:0,
        marginLeft:(winWidth - winHeight * imageRatio)*0.5
      });
    }
}
$(function() {

  var win = $(window),
      fullscreen = $('.wrapper'),
      image = fullscreen.find('img'),
      imgW = image.width(),
      imgH = image.height(),
      imageRatio = imgW / imgH;


  function resizeImage() {
    var winWidth = win.width(),
        winHeight = win.height(),
        winRatio = winWidth / winHeight;

    if(winRatio > imageRatio) {
      image.css({
        width: winWidth,
        height: winWidth / imageRatio,
        marginTop:(winHeight - winWidth / imageRatio)*0.5,
        marginLeft:0
      });
    } else {
      image.css({
        width: winHeight * imageRatio,
        height: winHeight,
        marginTop:0,
        marginLeft:(winWidth - winHeight * imageRatio)*0.5
      });
    }
  }

  win.bind({
    load: function() {
      resizeImage();
    },
    resize: function() {
      resizeImage();
    }
  });


});
