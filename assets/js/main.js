function lineclamp() {
    var lineheight = parseFloat($('p').css('line-height'));
    var articleheight = $('article').height(); 
    var calc = parseInt(articleheight/lineheight) + 3;
    $("p").css({"-webkit-line-clamp": "" + calc + ""});
}
  
$(document).ready(function() {
    lineclamp();
});

$( window ).resize(function() {
    lineclamp();
});