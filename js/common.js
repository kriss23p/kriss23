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



    // main_scroll
    var container = document.querySelector('.container');

    // json
    $.ajax({
        url: 'data.json',
        success: function (data) {
            var main_img = '', idx = 0, loop, delta;

            container.addEventListener('mousewheel', function (e) {
                // delta = e.originalEvent.wheelDelta;

                clearTimeout(loop);
                loop = setTimeout(function () {
                    var ul = document.querySelector('.page ul');
                    var subimg = document.querySelectorAll('.page nav a img');
                    var subtext = document.querySelector('.page figure');


                    ul.setAttribute('class', 'active');
                    subtext.setAttribute('class', 'active');
                    for (var i = 0; i < subimg.length; i++) {
                        subimg[i].setAttribute('class', 'active');
                    }

                    // if( delta > 0 ){
                    //     setTimeout(function(){
                    //         var li = '';
                    //         idx++;
                    //     },1700);
                    // }

                    setTimeout(function () {
                        var li = '';
                        idx++;

                        if (idx == subimg.length) { idx = 0 }
                        for (var i = 0; i < data.gallery[idx][1].length; i++) { //
                            li += "<li>" + data.gallery[idx][1][i] + "</li>"; //
                        }
                        $('.count').text(idx + 1 + ' / 3');


                        main_img = "<nav>",
                            main_img += "<a href=" + data.gallery[idx][3] + ">",
                            main_img += "<img class='scroll_2' src=" + data.gallery[idx][0].split(',')[0] + ">", //split ,로 json파일 이미지 구분?
                            main_img += "</a>",
                            main_img += "<a href=" + data.gallery[idx][3] + ">",
                            main_img += "<img class='scroll_2' src=" + data.gallery[idx][0].split(',')[1] + ">",
                            main_img += "</a>",
                            main_img += "<a href=" + data.gallery[idx][3] + ">",
                            main_img += "<img class='scroll_2' src=" + data.gallery[idx][0].split(',')[2] + ">",
                            main_img += "</a></nav>",
                            main_img += "<ul class='scroll_1'>" + li + "</ul>",
                            main_img += "<figure class='scroll_3'>",
                            main_img += "<h5>" + data.gallery[idx][2] + "</h5>",
                            main_img += "</figure>";

                        $('.page').html(main_img);

                    }, 1700);

                }, 30);

            });
        }
    });

});