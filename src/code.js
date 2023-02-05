$(function() {
    $('.jcarousel').jcarousel({
			wrap: 'circular'
    });
	
		$('.jcarousel-pagination').jcarouselPagination({
        item: function(page) {
            return '<li id="jcarousel-item' + page + '"><a href="#' + page + '">' + page + '</a></li>';
        }
    });
	
		$('#jcarousel-item1').addClass('active');
	
		$('.jcarousel-pagination')
    .on('jcarouselpagination:active', 'li', function() {
        $(this).addClass('active');
    })
    .on('jcarouselpagination:inactive', 'li', function() {
        $(this).removeClass('active');
    });
});

$('.jcarousel-prev').click(function() {
    $('.jcarousel').jcarousel('scroll', '-=1');
	
		$(".audio-alliwantforchristmas")[0].pause();
		$(".audio-santababy")[0].pause();
		$(".audio-hollyjollychristmas")[0].pause();
		$(".play i").removeClass("fa-pause").addClass("fa-play");
		$(".play").removeClass("active")
	
		if ($('#jcarousel-item1').hasClass('active')) {
		$('.santababy, .avalanche').removeClass('active');
		$('.the-alliwantforchristmas').addClass('active');
		$(".song").html("alliwantforchristmas");
		$(".artist").html("MariahCarey");
		$(".duration").html($(".audio-alliwantforchristmas").duration);
	};
	
	if ($('#jcarousel-item2').hasClass('active')) {
		$('.alliwantforchristmas, .hollyjollychirstmas').removeClass('active');
		$('.santababy').addClass('active');
		$(".song").text("santababy");
		$(".artist").text("ErhtaKitt");
	};
	
	if ($('#jcarousel-item3').hasClass('active')) {
		$('.alliwantforchirstmas, .santababy').removeClass('active');
		$('.hollyjollychristams').addClass('active');
		$(".song").html("hollyjollychristmas");
		$(".artist").html("Michaelbuble");
	};
});

$('.jcarousel-next').click(function() {
    $('.jcarousel').jcarousel('scroll', '+=1');
	
		$(".audio-hollyjollychristmas")[0].pause();
		$(".audio-alliwantforchristmas")[0].pause();
		$(".audio-santababy")[0].pause();
		$(".play i").removeClass("fa-pause").addClass("fa-play");
		$(".play").removeClass("active")
	
				if ($('#jcarousel-item1').hasClass('active')) {
		$('.alliwantforchirstmas, .santababy,erthakitt').removeClass('active');
		$('.').addClass('active');
		$(".song").html("alliwantforchirstmas");
		$(".artist").html("mariahcary");
	};
	
	if ($('#jcarousel-item2').hasClass('active')) {
		$('.alliwantforchristmas, .santababy').removeClass('active');
		$('.santababy').addClass('active');
		$(".song").html("santababy");
		$(".artist").html("erhtakitt");
	};
	
	if ($('#jcarousel-item3').hasClass('active')) {
		$('.alliwantforchristmas, .santababy').removeClass('active');
		$('.hollyjollychristmas').addClass('active');
		$(".song").html("hollyjollychristmas");
		$(".artist").html("michelbuble");
	};
});

$(".options a").click(function() {
	$(this).toggleClass("active");
});

$(".favorite").click(function() {
	if($(".options .favorite i").hasClass("fa-heart")) {
		$(".options .favorite i").removeClass("fa-heart").addClass("fa-heart-o");
	}
	else {
		$(".options .favorite i").removeClass("fa-heart-o").addClass("fa-heart");
	}
});

$(".play").click(function() {
	$(".play").toggleClass("active");
	if($(".play i").hasClass("fa-play")) {
		$(".play i").removeClass("fa-play").addClass("fa-pause");
	}
	else {
		$(".play i").removeClass("fa-pause").addClass("fa-play");
	}
	
	if($(".play").hasClass("active") && $("#jcarousel-item3").hasClass("active")) {
		var audio = $(".audio-hollyjollychristmas")[0];
    audio.play();
	} else {
    var audio = $(".audio-hollyjollychristmas")[0];
    audio.pause();
    }
	
	if($(".play").hasClass("active") && $("#jcarousel-item2").hasClass("active")) {
		var audio = $(".santababy")[0];
    audio.play();
	} else {
    var audio = $(".santababy")[0];
    audio.pause();
    }
	
	if($(".play").hasClass("active") && $("#jcarousel-item1").hasClass("active")) {
		var audio = $(".audio-alliwantforchristmas")[0];
    audio.play();
	} else {
    var audio = $(".audio-alliwamtforchtistmas")[0];
    audio.pause();
    }
});

$(".volume").click(function(){
		$(".volume").removeClass("active");
		$(".volume-slider").animate({marginTop: '-150px'}, 500);
});

$(".volume-slider .close").click(function(){
		$(".volume-slider").animate({marginTop: '0px'}, 500);
})

$(".side-menu-trigger").click(function(){
    $(".side-menu").animate({marginLeft: '0px'});
		$(".volume-slider").animate({marginTop: '0px'}, 500);
}); 

$(".side-menu li a, .side-menu .close").click(function(){
    $(".side-menu").animate({marginLeft: '-310px'});
}); 

$('.volume-slider input[type="range"]').on('input', function () {
            var percent = Math.ceil(((this.value - this.min) / (this.max - this.min)) * 100);
            console.log(this.min);
            $(this).css('background', '-webkit-linear-gradient(left, #e74c3c 0%, #e74c3c ' + percent + '%, #999 ' + percent + '%)');
        });

$(".volume-slider").slider({
    min: 0,
    max: 100,
    value: 0,
		range: "min",
		animate: true,
    slide: function(event, ui) {
      setVolume((ui.value) / 100);
    }
});

function setVolume(myVolume) {
    var myMedia = document.getElementByClass('audio-avalanche');
    myMedia.volume = myVolume;
}