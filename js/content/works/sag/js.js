$(function(){$(".ufo").on("click",function(){var i=$(this).css("display","none");$(".anim").attr("src","").css({opacity:1,display:"block"}).attr("src","img/works/sag/anim.gif"),setTimeout(function(){$(".anim").css("opacity",1).animate({opacity:0},function(){i.css("display","")})},1e4)})});
