$(document).ready(function(){
	console.log("I got in");

	$('.line-1').on('click', function(){
	    $(this).toggleClass('line-1-active');
	});

	$('.line-2').on('click', function(){
	    $(this).toggleClass('line-2-active');

	});

	$('.line-3').on('click', function(){
	    $(this).toggleClass('line-3-active');

	});

	$('.line-4').on('click', function(){
	    $(this).toggleClass('line-4-active');

	});

	$('.home-menu').on('click', function(){
	    $(this).toggleClass('main-line-background-active');
	    $('.logo-left').attr("src",'img/logo-dark.png');
	    $('.big-title-1').toggleClass('big-title-active');

	});

	$('.lists').on('click', function(){
	    $(this).toggleClass('main-line-background-active');
	    $('.nav-img').attr("src",'img/nav-icon-dark.png');
	    $('.big-title-3').toggleClass('big-title-active');

	});

	$('.logout').on('click', function(){
	    $(this).toggleClass('main-line-background-active');
	    $('.logout-img').attr("src",'img/logout-icon-dark.png');
	    $('.big-title-2').toggleClass('big-title-active');

	});

    $('.snapjs-left').resize(function() {
        var bodyheight = $(body).height();
         $(".snapjs-left").height(bodyheight);
    }); 
   

})


