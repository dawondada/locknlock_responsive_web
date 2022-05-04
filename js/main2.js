/* main.js */ 

window.addEventListener("load",function(){

    var ht = window.innerHeight;
    var wid = document.querySelector("body").offsetWidth;
    var limitSize = 959;
    var tabSize = 1104;
    var scrollPrev = document.documentElement.scrollTop;
    var contentHt = document.querySelectorAll(".content1 > div");

    window.addEventListener("resize",function(){
        ht = window.innerHeight;
        wid = document.querySelector("body").offsetWidth;
        bar = document.querySelector(".bar_slide").offsetWidth;
        miniBarWid = bar/3;
    
        if(wid<=tabSize){
             contentHt.forEach(function(item){
                 item.offsetHeight=ht;
             });
        }
    });

     /*  모바일 주메뉴  */
    /*  햄버거버튼  */
    var mobBtn = document.querySelector(".mobBtn");
    var mobMenu = document.querySelector(".mobMenu");
    var bodyAll = document.querySelector("body");
    var mobBtnClose = document.querySelector(".mobBtn_close");
    
    mobBtn.addEventListener("click",function(){
        if(wid<=limitSize){
            mobMenu.classList.toggle("on");
            bodyAll.classList.toggle("on");
            this.classList.toggle("on");
        }else{
            return false;
        }
    });
    mobBtnClose.addEventListener("click",function(){
        if(wid<=limitSize){
            mobMenu.classList.remove("on");
            bodyAll.classList.remove("on");
            mobBtn.classList.remove("on");
        }
    });
   
    /*  모바일 주메뉴 2단  */
    var mobMenuList = document.querySelectorAll(".mobGnb > ul > li");
    var mobSubMenu = document.querySelectorAll(".mobGnb > ul > li > div > ul > li");

    // 클릭했을때 토글 기능이 있는 형태(형제요소는 계속 열려있음)
    for(var i=0;i<mobMenuList.length;i++){
        mobMenuList[i].addEventListener("click",function(e){
            e.preventDefault();
            this.classList.toggle("on");
        });
    }    

    for(var i=0;i<mobSubMenu.length;i++){
        mobSubMenu[i].addEventListener("click",function(e){
            e.preventDefault();
            e.stopPropagation();
            this.classList.toggle("on");
        });
    }
    
    /*
    //토글 기능은 없지만 형제 요소를 클릭했을때 닫히는 형태
    mobMenuList.forEach(function(item){
        item.addEventListener("click",function(e){
            e.preventDefault();
            for(var i=0;i<mobMenuList.length;i++){
                mobMenuList[i].classList.remove("on");
            }
            this.classList.toggle("on");
        });
    });
    mobSubMenu.forEach(function(item){
        item.addEventListener("click",function(e){
            e.preventDefault();
            for(var i=0;i<mobSubMenu.length;i++){
                mobSubMenu[i].classList.remove("on");
            }
            this.classList.toggle("on");
        });
    });

    */

    
    /*  gnb  */
    var gnbMenu = document.querySelectorAll(".gnb > ul > li");
    var headerWrap = document.querySelector(".header_wrap");
    var topMenu = document.querySelectorAll(".top_menu > li")[1]

    for(var i=0;i<gnbMenu.length;i++){
        gnbMenu[i].addEventListener('mouseover',function(){
            this.classList.add("on");
            var ht = this.children[1].offsetHeight;
            headerWrap.style.height = 64 + ht +"px";
        });

        gnbMenu[i].addEventListener('mouseout',function(){
            this.classList.remove('on');
            headerWrap.style.height = '64px';
        });
    }

    /*  탑메뉴  */
    topMenu.addEventListener("click",function(){
        this.classList.toggle("on");
        if(this.classList.contains("on")){
            headerWrap.classList.add("on");
        }else{
            headerWrap.classList.remove("on")
        }
    });

    /*  검색버튼  */
    var btnSrch = document.querySelector(".btn_srch");
    var srchWrap = document.querySelector(".srch_wrap");
    var btnSrchClose = document.querySelector(".btn_srch_close");

    btnSrch.addEventListener("click",function(){
        srchWrap.classList.toggle("on");
        bodyAll.classList.toggle("on");
        this.classList.toggle("on");
    });
    btnSrchClose.addEventListener("click",function(){
        srchWrap.classList.remove("on");
        bodyAll.classList.remove("on");
        btnSrch.classList.remove("on");
    });

    /*  배너  */
    //롤링
    var slide = document.querySelectorAll(".slide");
    var slideRoll = document.querySelectorAll(".slide_roll > ul > li");

    slideRoll.forEach(function(item){
        item.addEventListener("click",rollAction);
    });

    function rollAction(item){
        curRoll = item.currentTarget;
        parentRoll = curRoll.parentElement;
        childRoll = parentRoll.children;
        curIdx = Array.from(childRoll).indexOf(curRoll);
        
        item.preventDefault();
        slide.forEach(function(idx){
            idx.classList.remove("active");
        });
        slide[curIdx].classList.add("active");

        slideRoll.forEach(function(idx){
            idx.classList.remove("on");
        });
        slideRoll[curRoll].classList.add("on");
    };

    /*  컨텐츠3 라운지  */ 
    var slideNum =0;
    var lastNum = document.querySelectorAll(".content3_inner > ul > li").length-1;
    var rollWid = document.querySelector(".content3_inner > ul > li").offsetWidth+60;
    var bar = document.querySelector(".bar_slide").offsetWidth;
    var miniBarWid = bar/3;
    var miniBar = document.querySelector(".bar_slide > span");
    var btnNext = document.querySelector(".btn_next");
    var btnPrev = document.querySelector(".btn_prev");
    var btnAll = document.querySelectorAll(".btn_move > button");
    var slideUl = document.querySelector(".content3_inner > ul");
    var slideList = document.querySelectorAll(".content3_inner > ul > li");
    var numbering = document.querySelector(".select_num"); 

    //next
    btnNext.addEventListener("click",function(){
        slideNum++;
        if(slideNum>lastNum) slideNum=0;
            slideUl.style.left = (-rollWid*slideNum)+"px";
            numbering.innerHTML = slideNum+1;
            miniBar.style.width = miniBarWid*(slideNum+1)+"px";

        if(slideList[slideNum].classList.contains("right")){
            btnAll.forEach(function(item){
                item.classList.remove("active");
            });
            btnNext.classList.add("active");
        }
        if(slideList[slideNum].classList.contains("both")){
            btnAll.forEach(function(item){
                item.classList.remove("active");
            });
            btnNext.classList.add("active");
            btnPrev.classList.add("active");
        }
        if(slideList[slideNum].classList.contains("left")){
            btnAll.forEach(function(item){
                item.classList.remove("active");
            });
            btnPrev.classList.add("active");
        }
     
    });
    
    btnPrev.addEventListener("click",function(){
        slideNum--;
        if(slideNum<0) slideNum=lastNum;
        slideUl.style.left = (-rollWid*slideNum)+"px";
        numbering.innerHTML = slideNum+1;
        miniBar.style.width = miniBarWid*(slideNum+1)+"px"

    if(slideList[slideNum].classList.contains("right")){
        btnAll.forEach(function(item){
            item.classList.remove("active");
        });
        btnNext.classList.add("active");
    }
    if(slideList[slideNum].classList.contains("both")){
        btnAll.forEach(function(item){
            item.classList.remove("active");
        });
        btnNext.classList.add("active");
        btnPrev.classList.add("active");
    }
    if(slideList[slideNum].classList.contains("left")){
        btnAll.forEach(function(item){
            item.classList.remove("active");
        });
        btnPrev.classList.add("active");
    }
    });

    /*  스크롤  */
    var btnMall = document.querySelector(".btn_mall");
    
    window.addEventListener("scroll",function(){
        var scrollTop = document.querySelector("html").scrollTop;
        btnMall.style.bottom = 20-scrollTop+"px";
    });

    /* 패밀리 사이트 */
    var btnFamilySite = document.querySelector(".familysite button");
    var siteList = document.querySelector(".familysite > ul > li > ul");

    btnFamilySite.addEventListener("click",function(e){
        e.preventDefault();
        siteList.classList.toggle("on");
        this.classList.toggle("on");
    });

    /*  모바일 footer  */
    var mobFooterMenu = document.querySelectorAll(".mob_sitemap > ul > li");
    var mobFamilySite = document.querySelector(".mob_familysite > ul > li > p");
    var mobFamilySiteList = document.querySelector(".mob_familysite > ul > li > ul");
    var mobAddr = document.querySelector(".mob_addr > p");
    var mobAddrList = document.querySelector(".mob_addr > address");

    for(var i=0;i<mobFooterMenu.length;i++){
        mobFooterMenu[i].addEventListener("click",function(e){
            e.preventDefault();
            this.classList.toggle("on");
        });
    }
    mobFamilySite.addEventListener("click",function(){
        mobFamilySiteList.classList.toggle("on");
    });
    mobAddr.addEventListener("click",function(){
        mobAddrList.classList.toggle("on");
    });
});