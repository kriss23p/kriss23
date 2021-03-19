$(function(){
    $('header').load('inc.html header .menu', init);
    $('footer').load('inc.html footer .foot', init2);

    var rainaudio = document.querySelector('audio');
    var menuaudio = document.querySelector('.foot a p span');



    function init(){
        $('.menu .menu_btn').on('click',function(){
            $('.menu .menu_btn').toggleClass('active');
            $('.menu h2').toggleClass('active');
            $('.foot').toggleClass('active');
            $('.close').toggleClass('active');

            localStorage.pagenum = $(this).index();
        });
    }
    
    function init2(){
        $('.foot a p').on('click',function(){
            $('.foot a p').toggleClass('active');
            $('.foot a p span').toggleClass('active');
            rainaudio.play();
            // if( menuaudio.className == 'active' ){
            //     rainaudio.play();
            // }else{
            //     rainaudio.pause();
            // }
    
            // if( $(this) == menuaudio ) rainaudio.pause();
            localStorage.pagenum = $(this).index();
        });
    }
});