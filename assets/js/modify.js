$(function(){
    $('.projects>ul').hide();
    $('.projects>li').on('click',function(){
        $('.projects>ul').hide(500);
        $(this).next('ul').is(':visible') || $(this).next('ul').show(500);
    });
});