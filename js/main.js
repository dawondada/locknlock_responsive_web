/*  main.js  */
$(function(){

    var ht = $(window).height();
    var wid = $("body").width();
    var limitSize = 959;
    var tabSize = 1104;
    var scrollPrev = $("body,html").scrollTop();

    console.log(wid);

    $(window).resize(function(){
        ht = $(window).height();
        wid = $("body").width();
        bar =$(".bar_slide").width();
        barMini = bar/3;
        console.log(wid);

        if(wid<=tabSize){

            $(".content1 > div").height(ht);
        }

    });

    
        /*  주메뉴  */
        //다른 함수와 충돌로 주석처리 호버 효과는 css에서
        /* header_wrap 호버
        //마우스 올렸을때
        $(".header_wrap").bind("mouseover focus",function(){
            $(this).addClass("on");
        });

        //마우스 뗐을때
        $(".header_wrap").bind("mouseleave blur",function(){
            $(this).removeClass("on");
        });
        */

         /*  모바일 주메뉴  */
         /*  햄버거버튼  */
       $(".mobBtn").bind("click focus",function(){
           if(wid<=limitSize){
                $(".mobMenu").toggleClass("on");
                $("body").toggleClass("on");
                $(this).toggleClass("on");
           }else{
               return false;
           }
       });

       $(".mobBtn_close").bind("click focus",function(){
           if(wid<=limitSize){
                $(".mobMenu").removeClass("on");
                $("body").removeClass("on");
                $(".mobBtn").removeClass("on");
           }else{
               return false;
           }
       });

       /*  모바일 주메뉴 2단  */
       $(".mobGnb > ul > li").bind("click focus",function(e){
           e.preventDefault();
            $(this).toggleClass("on");

            $(".mobGnb > ul > li > div > ul > li").bind("click focus",function(e){
                e.preventDefault();
                $(this).toggleClass("on");
            });
     
       });

        /*  gnb  */
        $("nav.gnb > ul > li > a").bind("mouseover focus",function(){
            $("nav.gnb > ul > li").removeClass("on");
            $(this).parent().addClass("on");
        });

        $(".header_wrap").bind("mouseleave blur",function(){
            $("nav.gnb > ul > li").removeClass("on");
        })

        /*  탑메뉴  */
        $(".top_menu > li").eq(1).bind("click focus",function(){
            $(this).toggleClass("on");
            if($(this).hasClass("on")){
                $(".header_wrap").addClass("on");
            }else{
                $(".header_wrap").removeClass("on");
            }
        });

        /*  검색버튼  */
        // $(".btn_srch").bind("click focus",function(){
        //     $(".srch_wrap").css({"display":"block"});
        // });
        // $(".btn_srch_close").bind("click focus",function(){
        //     $(".srch_wrap").css({"display":"none"});
        // });

        $(".btn_srch").bind("click focus",function(){
            $(".srch_wrap").toggleClass("on");
            $(this).toggleClass("on");
        });
        $(".btn_srch_close").bind("click focus",function(){
            $(".srch_wrap").removeClass("on");
            $(".btn_srch").removeClass("on");
        });
        

        /*  배너  */
        //롤링
        $(".slide_roll > ul > li >a").bind("click focus",function(e){
            e.preventDefault();
            var rollIdx = $(this).parent().index();
            $("li.slide").removeClass("active");
            $("li.slide").eq(rollIdx).addClass("active");

            $(".slide_roll > ul > li").removeClass("on");
            $(".slide_roll > ul > li").eq(rollIdx).addClass("on");
        });

        /*  lounge  */
        var slideNum = 0;
        var lastNum = $(".content3_inner > ul > li").size()-1;
        var rollWid = $(".content3_inner > ul > li").width()+60;
        var bar =$(".bar_slide").width();
        var barMini = bar/3;
        console.log(barMini);

        //다음버튼
        $(".btn_next").bind("click focus",function(){
            slideNum++;
            if(slideNum>lastNum){slideNum=0;}
            $(".content3_inner > ul").stop().animate({"left":-rollWid*slideNum+"px"},600,"linear");
            $(".select_num").html(slideNum+1);  
            $(".bar_slide span").stop().animate({"width":barMini*(slideNum+1)},600,"linear");

            if($(".content3_inner > ul > li").eq(slideNum).hasClass("right")){
                $(".btn_move > button").removeClass("active");
                $(".btn_next").addClass("active");
            }
            if($(".content3_inner > ul > li").eq(slideNum).hasClass("both")){
                $(".btn_move > button").removeClass("active");
                $(".btn_prev").addClass("active");
                $(".btn_next").addClass("active");
            }
            if($(".content3_inner > ul > li").eq(slideNum).hasClass("left")){
                $(".btn_move > button").removeClass("active");
                $(".btn_prev").addClass("active");
            }

        });
        //이전버튼 
        $(".btn_prev").bind("click focus",function(){
        slideNum--;
        if(slideNum<0){slideNum=2;}
        $(".content3_inner > ul").stop().animate({"left":-rollWid*slideNum+"px"},600,"linear");
        $(".slect_num").html(slideNum+1); 
        $(".bar_slide span").stop().animate({"width":barMini*(slideNum+1)},600,"linear"); 

        if($(".content3_inner > ul > li").eq(slideNum).hasClass("right")){
            $(".btn_move > button").removeClass("active");
            $(".btn_next").addClass("active");
        }
        if($(".content3_inner > ul > li").eq(slideNum).hasClass("both")){
            $(".btn_move > button").removeClass("active");
            $(".btn_prev").addClass("active");
            $(".btn_next").addClass("active");
        }
        if($(".content3_inner > ul > li").eq(slideNum).hasClass("left")){
            $(".btn_move > button").removeClass("active");
            $(".btn_prev").addClass("active");
        }

        });
    
        /*  스크롤  */
        //락앤락몰
        $(window).scroll(function(){
        var scrollTop = $("body,html").scrollTop();
        
        $(".btn_mall").stop().animate({"bottom":-scrollTop+20+"px"},500)


        /* 
        //스크롤 방향에 따른 헤더랩 노출, 헤더랩 on스크립트와 충돌? 오류
        var direction = scrollTop - scrollPrev;
        console.log(direction);

        if(direction>0){
            $(".header_wrap").removeClass("on");
        }else{
            $(".header_wrap").addClass("on");
        }

        */

        });

        /* 패밀리 사이트 */
        $(".familysite button").bind("focus click",function(){
            $(".familysite > ul > li > ul").toggleClass("on");
            $(this).toggleClass("on");
        });
  
        /* 모바일 푸터 */
        $(".mob_sitemap > ul > li").bind("click focus",function(e){
            e.preventDefault();
            $(this).siblings().removeClass("on");
            $(this).addClass("on");
        });
        $(".mob_familysite > ul > li > p").bind("click focus",function(){
            $(".mob_familysite > ul > li > ul").toggleClass("on");
        });
        $(".mob_addr > p").bind("click focus",function(){
            $(".mob_addr > address").toggleClass("on");
        });

   
});