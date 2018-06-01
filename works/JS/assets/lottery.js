$(function(){
    $('a').on('click',function(ev){
        ev.preventDefault();
    });

    var timer = null;
    var i = 0;
    var speed = 30;
    var total = 0;
    var whole = 0;
    var bonus_list = [0,1,2,4,7,6,5,3];
    $('.start').on('click',start);
    function start(){
        total = 0;
        speed = 30;
        run();
        $(this).addClass('start-change');
    }
    function run(){
        clearTimeout(timer);
        var add = Math.floor(Math.random()*11);
        whole = Math.floor(Math.random()*3001)+3000;
        
        total += speed;
        speed += add;

        if(total > whole) {
            alert('恭喜你获得:'+$('.select').text());
            return;
        };

        i++;
        if(i > 7)i = 0;

        $('.start').removeClass('start-change');
        $('.bonus').removeClass('select');
        $('.bonus').eq(bonus_list[i]).addClass('select');


        timer = setTimeout(run,speed);
    }
});