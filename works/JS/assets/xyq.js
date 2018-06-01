$(function(){
    $('a').on('click',function(ev){
        ev.preventDefault();
    });
    $('.intr-large').css({
        width:$(this).children('img').width(),
    });
    function run(){
        $('.intr-small').children('img').removeClass('selected');
        $(this).children('.intr-small').children('img:first').addClass('selected');
        $('.intr').stop().animate({
            width: '121px',
        });
        $(this).stop().animate({
            width:(121 + $(this).children('.intr-large').innerWidth()) +'px',
        });
    }
    $('.intr').on('mouseover',run);
});