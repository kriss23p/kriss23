$(function(){
    $('.but').on('click',function(e){
        $('.pop').addClass('active');
        $('.pop a').on('click',function(){
            $('.pop').removeClass('active');
        });
    });

    $('.menu-trigger').on('click',function(){
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
    });
});