$(document).ready(function(){


    /* index.js */
    

    ////////////// main fade slider part //////////////
    var $slide = $("#main ul li");

    // common_slide part
    function commonFunc(){
        var $idx = $("#main ul li.show").index();

        $("#main ol li").removeClass("active");
        $("#main ol li").eq($idx).addClass("active");
        
    }

    // auto slide part
    setInterval(function(){
        var $hover = $("#main").hasClass("hover");  
        var $stop = $("#slider_02 .slider_play").hasClass("stop");

        if($hover == true || $stop == true){

        }else{
            var $show = $("#main ul li.show").index();

            $("#main ul li").removeClass("show");
            if($show == $slide.length - 1){
                $("#main ul li").eq(0).addClass("show");
            }else{
                $("#main ul li").eq($show).next().addClass("show");
            }

            commonFunc();

        }
    }, 4000);


    // mouse hover stop part
    $("#main").hover(function(){
        $(this).addClass("hover");
    }, function(){
        $(this).removeClass("hover");
    });


    // next, prev button part
    $("#main .prev").click(function(){
        var $show = $("#main ul li.show").index();
        $("#main ul li").removeClass("show");
        if($show == 0){
            $("#main ul li").eq($slide.length - 1).addClass("show");
        }else{
            $("#main ul li").eq($show).prev().addClass("show");
        }

        commonFunc();

        return false;
    });

    $("#main .next").click(function(){
        var $show = $("#main ul li.show").index();

        $("#main ul li").removeClass("show");
        if($show == $slide.length - 1){
            $("#main ul li").eq(0).addClass("show");
        }else{
            $("#main ul li").eq($show).next().addClass("show");
        }

        commonFunc();

        return false;
    });

    // slide nav part
    $("#main ol li").click(function(){
        var $idx = $(this).index();
        $("#main ol li").removeClass("active");
        $(this).addClass("active");
        $("#main ul li").removeClass("show");
        $("#main ul li").eq($idx).addClass("show");
    });




    ////////////// section_02 tab box part //////////////
    var tab_box_arr = [
        {$part: "interior", $img: "interior_01.jpg", $name: "Living Room"},
        {$part: "interior", $img: "interior_02.jpg", $name: "Rest Room"},
        {$part: "interior", $img: "interior_03.jpg", $name: "kitchen"},
        {$part: "interior", $img: "interior_04.jpg", $name: "Bed Room"},
        {$part: "exterior", $img: "exterior_01.jpg", $name: "Deco Wall"},
        {$part: "exterior", $img: "exterior_02.jpg", $name: "Garden"},
        {$part: "exterior", $img: "exterior_03.jpg", $name: "Swim Pool"},
        {$part: "exterior", $img: "exterior_04.jpg", $name: "Stair"},
        {$part: "furniture", $img: "furniture_01.jpg", $name: "Sofas"},
        {$part: "furniture", $img: "furniture_02.jpg", $name: "Bed"},
        {$part: "furniture", $img: "furniture_03.jpg", $name: "Chair"},
        {$part: "furniture", $img: "furniture_04.jpg", $name: "Desk"},
    ];

    
    for(i of tab_box_arr){
        var $sample = `
            <div class="tab_img" style="background-image: url(./img/tab_${i.$part}/${i.$img});">
                <div class="detail_box">
                    <h2>${i.$name}</h2>
                    <a href="" class="more_btn">Detail More</a>
                </div>
            </div>
        `;
        
        if(i.$part == "interior"){
            $(".tab_cont .tab1").append($sample);

        }else if(i.$part == "exterior"){
            $(".tab_cont .tab2").append($sample);

        }else{
            $(".tab_cont .tab3").append($sample);

        }
        
        
    }
    
    $(".tab_btn ul li").click(function(){
        var $idx = $(this).index();

        $(".tab_btn ul li").removeClass("activeBtn");
        $(this).addClass("activeBtn");

        $(".bg-bk").stop().animate({"left":((100 / 3) * $idx) + "%"}, 500);

        $(".tab_cont .tab_box").removeClass("activeCont");
        $(".tab_cont .tab_box").eq($idx).addClass("activeCont");
        
    });

    $(".tab_cont .tab_box .more_btn").click(function(){
        var $img = $(this).closest(".tab_img").css('background-image');
        var $title = $(this).siblings("h2").text();

        $(".popup .title_box h2").text($title);
        $(".popup .img").css({"background-image":$img});

        $(".popup").addClass("active");
        $(".dark_bg").addClass("active");
        $("body").addClass("active");

        return false;
    });
    
    $(".popup .close_btn, .dark_bg").click(function(){
        $(".popup").removeClass("active");
        $(".dark_bg").removeClass("active");
        $("body").removeClass("active");
    });




    ////////////// section_03 part //////////////
    var sec03_arr = [
        {$img: "bkimg0.png", $title: "Mission", $cont: "Provide a complete service that is of the highest quality in speed, efficiency, communications and cost; and exceeds client’s expectations."},
        {$img: "bkimg1.png", $title: "Value", $cont: "With our passion for design, creativity and imagination obsession for details and leadership, we will always strive for continuous improvement."},
        {$img: "bkimg2.png", $title: "Vision", $cont: "To be a preferred interior design company in quality service and technologically advanced communications and to offer a complete solution to our clients’ needs."},
    ];

    for(i of sec03_arr){
        $("#section_03 .bot_part").append(`
            <div class="cont_box">
                <div class="img_part">
                    <div class="img" style="background-image: url(./img/${i.$img});"></div>
                </div>
                <h2>${i.$title}</h2>
                <p>${i.$cont}</p>
            </div>
        `);
    }
    
    

    ////////////// section_04 part //////////////
    var sec04_arr = [
        {$img: "services-icon-one.png", $title: "1. Planing & Designing", $cont: "Constructor explains how you can enjoy high end flooring trends like textured wood and realistic stones with new laminate flooring."},
        {$img: "services-icon-three.png", $title: "2. Implementation", $cont: "Professional construction services from house renovations and remodeling, green building and small scope work, like painting."},
        {$img: "services-icon-two.png", $title: "3. Evaluation", $cont: "Our highly educated staff will make sure that your project will be finished on time and specified budget house & remodeling."},
    ];

    for(i of sec04_arr){
        $("#section_04 .bot_part").append(`
            <div class="cont_box">
                <div class="img_part">
                    <img src="./img/${i.$img}" alt="">
                </div>
                <h2>${i.$title}</h2>
                <p>${i.$cont}</p>
                <a class="more_btn" href="" onclick="return false;">Detail More ></a>
            </div>
        `);
    }



    
    
    
});