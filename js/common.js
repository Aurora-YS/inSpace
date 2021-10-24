$(document).ready(function(){


    /* common.js */
    

    ////////////// header part //////////////
    $("#header").load("./header.html", function(){

        $("#header #menu li").click(function(){
            var $idx = $(this).index();
            var $section = $("section").eq($idx);

            $("header #menu li").removeClass("active");
            $(this).addClass("active");
    
            $("section").removeClass("active");
            $("section").eq($idx).addClass("active");
    
            $("html, body").stop().animate({scrollTop : $("section").eq($idx).offset().top}, 1000);
    
            return false;
        });
        
    });



    ////////////// footer part //////////////
    $("#footer").load("./footer.html");


});