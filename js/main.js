(()=>{"use strict";$((function(){$("header").load("inc.html header .menu",(function(){$(".menu .menu_btn").on("click",(function(){$(".menu .menu_btn").toggleClass("active"),$(".menu h2").toggleClass("active"),$(".foot").toggleClass("active"),$(".close").toggleClass("active"),localStorage.pagenum=$(this).index()}))})),$("footer").load("inc.html footer .foot",(function(){$(".foot a p").on("click",(function(){$(".foot a p").toggleClass("active"),$(".foot a p span").toggleClass("active"),e.play(),localStorage.pagenum=$(this).index()}))}));var e=document.querySelector("audio");document.querySelector(".foot a p span");var t=document.querySelector(".container");$.ajax({url:"data.json",success:function(e){var l,a="",o=0;t.addEventListener("mousewheel",(function(t){clearTimeout(l),l=setTimeout((function(){var t=document.querySelector(".page ul"),l=document.querySelectorAll(".page nav a img"),c=document.querySelector(".page figure");t.setAttribute("class","active"),c.setAttribute("class","active");for(var r=0;r<l.length;r++)l[r].setAttribute("class","active");setTimeout((function(){var t="";++o==l.length&&(o=0);for(var c=0;c<e.gallery[o][1].length;c++)t+="<li>"+e.gallery[o][1][c]+"</li>";$(".count").text(o+1+" / 3"),a="<nav>",a+="<a href="+e.gallery[o][3]+">",a+="<img class='scroll_2' src="+e.gallery[o][0].split(",")[0]+">",a+="</a>",a+="<a href="+e.gallery[o][3]+">",a+="<img class='scroll_2' src="+e.gallery[o][0].split(",")[1]+">",a+="</a>",a+="<a href="+e.gallery[o][3]+">",a+="<img class='scroll_2' src="+e.gallery[o][0].split(",")[2]+">",a+="</a></nav>",a+="<ul class='scroll_1'>"+t+"</ul>",a+="<figure class='scroll_3'>",a+="<h5>"+e.gallery[o][2]+"</h5>",a+="</figure>",$(".page").html(a)}),1700)}),30)}))}})})),cusp()()})();