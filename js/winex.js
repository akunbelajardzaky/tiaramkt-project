/*
  [JS Index]
  
  ---
  
  Template Name: Winex - Creative Coming Soon Template
  Author:  ex-nihilo
  Version: 1.0
*/


/*
  1. preloader
  2. hero scale IN
  3. init animation
  4. init elements and borders
  5. borders ON resize
  6. panels, panel elements
  7. newsletter form
  8. countdown date
  9. countdown
  10. morphext
  11. text animation
  12. borders resize
  13. animations
  14. hero slider
    14.1. owlCarousel HERO slider SLIDE
    14.2. owlCarousel HERO slider ZOOM
    14.3. owlCarousel HERO slider SPLIT
  15. YouTube player
*/


$(function() {
    "use strict";
	
	
    $(window).on("load", function() {
        // 1. preloader
        $("#preloader").fadeOut(1400);
        $("#preloader-status").delay(300).fadeOut("slow");
		
        // 2. hero scale IN
        $(".hero-bg").addClass("hero-bg-show");
		
        // 3. init animation
        $(initAnim);
    });
	
    // 4. init elements and borders
    $(initFadeInText);
    $(init);
	
    // 5. borders ON resize
    $(window).on("resize", function() {
        $(bordersResize);
    });
	
    // 6. panels, panel elements
    $(".open-menu-content, .main-navigation-button-close").on("click", function() {
        if ($(".panel-left, .panel-right").hasClass("open")) {
            $(".panel-left, .panel-right").removeClass("open");
            $(".panel-left, .panel-right").addClass("close");
            $("h6, .titleOT, #navigation").removeClass("close");
            $("h6, .titleOT, #navigation").addClass("open");
            $("nav a").removeClass("active");
            $("#overlay").fadeOut(800, "easeInOutQuad");
            $(".panel-left-overlay").fadeOut(600, "easeInOutQuad");
        } else {
            $(".panel-left, .panel-right").removeClass("close");
            $(".panel-left, .panel-right").addClass("open");
            $("h6, .titleOT, #navigation").removeClass("open");
            $("h6, .titleOT, #navigation").addClass("close");
            $("nav a").addClass("active");
            $("#overlay").fadeIn(800, "easeInOutQuad");
            $(".panel-left-overlay").fadeIn(1200, "easeInOutQuad");
        }
    });
	
    // 7. newsletter form
    $("form#subscribe").on("submit", function() {
        $("form#subscribe .subscribe-error").remove();
        $.post("subscribe.php");
        var s = !1;
        if ($(".subscribe-requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="subscribe-error">Please enter your Email</span>'),
                    $(this).addClass("inputError"), s = !0;
                else if ($(this).hasClass("subscribe-email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="subscribe-error">Please enter a valid Email</span>'),
                        $(this).addClass("inputError"), s = !0);
                }
            }), !s) {
            $("form#subscribe input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#subscribe").slideUp("fast", function() {
                    $(this).before('<div class="subscribe-success">Thank you for subscribing.</div>');
                });
            });
        }
        return !1;
    });
	
    // 8. countdown date
    var end = new Date("05/05/2025 06:00 PM"); // FORMAT: month/day/year time
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;
	
    // 9. countdown
    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {
            clearInterval(timer);
            document.getElementById("countdown").innerHTML = "EXPIRED.";
            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);
        document.getElementById("countdown").innerHTML = days + "d, ";
        document.getElementById("countdown").innerHTML += hours + "h, ";
        document.getElementById("countdown").innerHTML += minutes + "m &amp; ";
        document.getElementById("countdown").innerHTML += seconds + "s left";
    }
    timer = setInterval(showRemaining, 1000);
	
    // 10. morphext
    $("#js-rotating").Morphext({
        animation: "pulse",
        separator: "|",
        speed: 4000,
        complete: function() {}
    });
	
    // 11. text animation
    function initFadeInText() {
        $(".text-animation").each(function(i) {
            $(this).addClass(".text-animation" + (i + 1));
        });
    }
	
    // 12. borders resize
    function bordersResize() {
        $(".border-top-1, .border-top-2, .border-bottom-1, .border-bottom-2").css("width", "50%");
        var widthFramework = $(".border-top-1").width();
        var widthTop = $(".center-space-top span").width();
        var widthBottom = $(".center-space-bottom span").width();
        var calculateTop = widthFramework - (widthTop / 2) - 8;
        var calculateBottom = widthFramework - (widthBottom / 2) - 8;
        $(".border-top-1").width(calculateTop);
        $(".border-top-2").width(calculateTop);
        $(".border-bottom-1").width(calculateBottom);
        $(".border-bottom-2").width(calculateBottom);
    }
	
    // 13. animations
    function initAnim() {
        $(".border-top-1, .border-top-2, .border-bottom-1, .border-bottom-2").css("width", "50%");
        $(".border-left, .border-right").css("height", "100%");
        var heightLaterals = $(".border-right").height();
        $(".border-left, .border-right").css("height", "0px");
        $(".border-left, .border-right").css("top", (heightLaterals / 2) + "px");
        var widthFramework = $(".border-top-1").width();
        var widthTop = $(".center-space-top span").width();
        var widthBottom = $(".center-space-bottom span").width();
        var calculateTop = widthFramework - (widthTop / 2) - 8;
        var calculateBottom = widthFramework - (widthBottom / 2) - 8;
        $(".border-top-1, .border-top-2, .border-bottom-1, .border-bottom-2").css("width", "0%");
        $(".border-left, .border-right").animate({
            height: heightLaterals + "px",
            top: "0px"
        }, 600, function() {
            $(".border-left, .border-right").css({
                height: "100%"
            });
            $(".border-top-1, .border-top-2").animate({
                width: (calculateTop - 25) + "px"
            }, 600);
            $(".border-bottom-1, .border-bottom-2").animate({
                width: (calculateBottom - 25) + "px"
            }, 600);
            $(".center-space-top, .center-space-bottom, .titleOT, nav, h6").stop(true, true).delay(500).animate({
                opacity: 1
            }, 3000);
        });
    }
    function init() {
        $(".center-space-top, .center-space-bottom, .titleOT, nav, h6").css("opacity", "0");
        $(".border-top-1, .border-top-2, .border-bottom-1, .border-bottom-2").css("width", "0%");
        $(".border-left, .border-right").css("height", "0px");
    }
	
    // 14. hero slider
    // 14.1. owlCarousel HERO slider SLIDE
    $(".hero-slider-slide").owlCarousel({
        autoPlay: true,
        navigation: true,
        pagination: false,
        transitionStyle: false,
        singleItem: true,
        items: 1,
        autoHeight: true,
        stopOnHover: false
    });
    // 14.2. owlCarousel HERO slider ZOOM
    $(".hero-slider-zoom").owlCarousel({
        autoPlay: true,
        navigation: false,
        pagination: false,
        transitionStyle: "fadeUp", // fade, backSlide, goDown, fadeUp
        singleItem: true,
        items: 1,
        autoHeight: true,
        stopOnHover: false
    });
    // 14.3. owlCarousel HERO slider SPLIT
    $(".hero-slider-split").owlCarousel({
        autoPlay: true,
        navigation: false,
        pagination: false,
        transitionStyle: false,
        singleItem: false,
        items: 2,
        itemsDesktop: [1000, 2],
        itemsDesktopSmall: [900, 2],
        itemsMobile: [680, 2],
        autoHeight: true,
        stopOnHover: false
    });
	
    // 15. YouTube player
	$("#bgndVideo").YTPlayer();
	
	
});