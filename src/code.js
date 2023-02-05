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
	
		$(".audio-avalanche")[0].pause();
		$(".audio-the-nights")[0].pause();
		$(".audio-dont-look-down")[0].pause();
		$(".play i").removeClass("fa-pause").addClass("fa-play");
		$(".play").removeClass("active")
	
		if ($('#jcarousel-item1').hasClass('active')) {
		$('.dont-look-down, .avalanche').removeClass('active');
		$('.the-nights').addClass('active');
		$(".song").html("The Nights");
		$(".artist").html("Avicii");
		$(".duration").html($(".audio-the-nights").duration);
	};
	
	if ($('#jcarousel-item2').hasClass('active')) {
		$('.the-nights, .avalanche').removeClass('active');
		$('.dont-look-down').addClass('active');
		$(".song").text("Don't Look Down");
		$(".artist").text("Martin Garrix");
	};
	
	if ($('#jcarousel-item3').hasClass('active')) {
		$('.the-nights, .dont-look-down').removeClass('active');
		$('.avalanche').addClass('active');
		$(".song").html("Avalanche");
		$(".artist").html("Bring Me The Horizon");
	};
});

$('.jcarousel-next').click(function() {
    $('.jcarousel').jcarousel('scroll', '+=1');
	
		$(".audio-avalanche")[0].pause();
		$(".audio-the-nights")[0].pause();
		$(".audio-dont-look-down")[0].pause();
		$(".play i").removeClass("fa-pause").addClass("fa-play");
		$(".play").removeClass("active")
	
				if ($('#jcarousel-item1').hasClass('active')) {
		$('.dont-look-down, .avalanche').removeClass('active');
		$('.the-nights').addClass('active');
		$(".song").html("The Nights");
		$(".artist").html("Avicii");
	};
	
	if ($('#jcarousel-item2').hasClass('active')) {
		$('.the-nights, .avalanche').removeClass('active');
		$('.dont-look-down').addClass('active');
		$(".song").html("Don't Look Down");
		$(".artist").html("Martin Garrix");
	};
	
	if ($('#jcarousel-item3').hasClass('active')) {
		$('.the-nights, .dont-look-down').removeClass('active');
		$('.avalanche').addClass('active');
		$(".song").html("Avalanche");
		$(".artist").html("Bring Me The Horizon");
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
		var audio = $(".audio-avalanche")[0];
    audio.play();
	} else {
    var audio = $(".audio-avalanche")[0];
    audio.pause();
    }
	
	if($(".play").hasClass("active") && $("#jcarousel-item2").hasClass("active")) {
		var audio = $(".audio-dont-look-down")[0];
    audio.play();
	} else {
    var audio = $(".audio-dont-look-down")[0];
    audio.pause();
    }
	
	if($(".play").hasClass("active") && $("#jcarousel-item1").hasClass("active")) {
		var audio = $(".audio-the-nights")[0];
    audio.play();
	} else {
    var audio = $(".audio-the-nights")[0];
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
var song = document.getElementById("audio");
$(document).ready(function(){
  
  $('.uk-range').on('touchend mouseup', function(){
    song.currentRime = $(this).val();
  });
  
  $('.material-input-text').blur(function(){
    $('audio').attr('src', $(this).val());
    if(!$(this).val().endsWith(".mp3")){
      alert("URL must end with .mp3");
    }
    $(this).val("");
  });
  
  var isClicked = false;
  $('.control-icon').on('click', function(){
    isClicked = !isClicked;
    if(!isClicked){
      $(this).text('play_arrow');
      song.pause();
    }
    if(isClicked){
      $(this).text('pause_arrow');
      song.play();
    }
  });
});

function setSongManually(path){
  var blobURL = URL.createObjectURL(path);
  $('#fileName').text(path.name);
  $('audio').attr('src', blobURL);
}

function updateTime(audio){
  var time = Math.floor(audio.currentTime);
  formatTime(time);
  $('.uk-range').attr('max', Math.floor(audio.duration));
  $('.uk-range').attr('value', time);
}

function songLoaded(audio){
  console.log(audio);
}

//Fromating the seconds into seconds and minutes
function formatTime(time){
  var secs = 0;
  var mins = 0;
  mins = time / 60;
  secs = time % 60;
  $('#time').text(Math.floor(mins) + " : " + secs);
}