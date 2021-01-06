$(function(){
    $("#navigation").each(function(){

       
        let allTitle = $(this).find('.nav__primary--title li');
        let allList = $(this).find(".nav__primary--sub ul");
        let activeTitle = allTitle.find("a.active")
        let activeList = activeTitle.attr("phref");
        
        $(activeList).show();

        $('.nav__primary--title a').click(function(){
            let activeList = $(this).attr("phref");

            allList.hide();
            $(activeList).fadeIn();
            $(".nav__primary--title a").removeClass("active");
            $(this).addClass("active");
            
            
           // $('.main__slide-tab a').removeClass('active');
           // $(this).addClass('active');
    
           // $('.slide-image').animate({left:imgLeft});
            //$(activeSlideName).show();
        });
    })

/*
        var activeTab = $(".main__slide-tab").find("a.active") 
        var activeSlideName = activeTab.attr("phref");
        $(activeSlideName).show();


        $('.main__slide-tab a').click(function(){
            var allSlideName = $("#main .slide-top").find(".main__slide-name");

            var activeSlideName = $(this).attr("phref");
            var imgLeft = $(this).attr('img-left');
            
            allSlideName.hide();
          
    
            $('.main__slide-tab a').removeClass('active')
            $(this).addClass('active');
    
            $('.slide-image').animate({left:imgLeft});
            $(activeSlideName).show();
        });*/

        $(".guide__content").each(function(){

       
            let allGuideTab = $(this).find('.guide__tab li');
            let allArticle = $("#guide .guide__content--detail").find(".article");
            let activeGuideTab = allGuideTab.find("a.active")
            let activeArticle = activeGuideTab.attr("phref");
            
            $(activeArticle).show();
    
            $('.guide__tab a').click(function(){
                let activeArticle = $(this).attr("phref");
    
                allArticle.hide();
                $(activeArticle).show();
                $(".guide__tab a").removeClass("active");
                $(this).addClass("active");
                
                
               // $('.main__slide-tab a').removeClass('active');
               // $(this).addClass('active');
        
               // $('.slide-image').animate({left:imgLeft});
                //$(activeSlideName).show();
            });
        })



   let sta = 1;
    $("#header .menu-btn").click(function(){
        if ( sta === 1 ) {
            $("#navigation").animate({height: "100vh"}, "slow").css({opacity: 1});
            $(this).text("CLOSE MENU");
            sta = 2;
        } else {
            $("#navigation").animate({height: "0"}, "slow");
            $(this).text("SEE MENU");
            sta = 1;
        }
    })
})