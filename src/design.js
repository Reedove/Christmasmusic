// Sliders

Var Slider = Document.GetElementById('Song-Progress');

NoUiSlider.Create(Slider, {
    Start: [ 20 ],
    Range: {
        'Min': [   0 ],
        'Max': [ 100 ]
    }
});

Var Slider = Document.GetElementById('Song-Volume');

NoUiSlider.Create(Slider, {
    Start: [ 90 ],
    Range: {
        'Min': [   0 ],
        'Max': [ 100 ]
    }
});


// Tooltips

$(Function () {
  $('[Data-Toggle="Tooltip"]').Tooltip()
})

// Viewport Heights

$(Window).On("Resize Load", Function(){
  
  Var TotalHeight = $(Window).Height();

  Var HeaderHeight = $('.Header').OuterHeight();
  Var FooterHeight = $('.Current-Track').OuterHeight();
  Var PlaylistHeight = $('.Playlist').OuterHeight();
  Var NowPlaying = $('.Playing').OuterHeight();

  Var NavHeight = TotalHeight - (HeaderHeight + FooterHeight + PlaylistHeight + NowPlaying);
  Var ArtistHeight = TotalHeight - (HeaderHeight + FooterHeight);

  Console.Log(TotalHeight);
  
  $(".Navigation").Css("Height" , NavHeight);
  $(".Artist").Css("Height" , ArtistHeight);
  $(".Social").Css("Height" , ArtistHeight);
  
});
    


  

// Collapse Toggles

$(".Navigation__list__header").On( "Click" , Function() {
  
  $(This).ToggleClass( "Active" );
  
});


// Media Queries

$(Window).On("Resize Load", Function(){
    If ($(Window).Width() <= 768){	
        
    $(".Collapse").RemoveClass("In");
    
    $(".Navigation").Css("Height" , "Auto");
    
    $(".Artist").Css("Height" , "Auto");
    
    }	
});

$(Window).On("Resize Load", Function(){
    If ($(Window).Width() > 768){	
        
    $(".Collapse").AddClass("In");
    
    }	
});