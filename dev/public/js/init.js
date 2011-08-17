$(document).ready(function(){
	/* This code is executed after the DOM has been completely loaded */
	
	$('nav a,#myheader a.up, #back-to-top-button a.up').click(function(e){
								
		// If a link has been clicked, scroll the page to the link's hash target:
		$.scrollTo( this.hash || 0, 1500);
		e.preventDefault();
	});
	
	// $('body').css('position','absolute');
	
	
	$('#back-to-top-button').fadeOut(1);
	var isff = $.browser.mozilla;
	var isie = $.browser.msie;
    var loginOffsetX = 0;
    
    $('#right-panel').css('position','fixed');
     $('#right-panel').css('top','129px');
    
    
    if(isff){
        loginOffsetX = 400;
        //back to button fix
        $('#back-to-top-button').css('margin-top','-252px');
        $('#header-footer').css('margin-top', '30px');
        $('#jabari-title').css('margin-top', '8px');
        $('#jabari-title').css('position', 'absolute');
        $('#jabari-title').css('z-index', '45');
    } else {
        loginOffsetX = 330;
    }

	if(isie)
	{
	    $('.work-item-even').each( function(index) {
	        $(this).css('padding-top', '31px');
	    });
	    
	    $('.work-item-even img').each( function(index) {
	        $(this).css('margin-top', '5px');
	    });
	    
	    $('right-panel').css('left', '910px');
	   // $('#about-section').css('margin-top', '-100px');
	} else {
	    
	     $('body').css('overflow-x', 'hidden');
	}
	

	window.onscroll = function()
	{
	    
	    var offsetX = $('#articles').offset();
        
	    if( window.XMLHttpRequest ) {
			 $('#myheader').css('position','fixed');
	         $('#myheader').css('top','0');
	         
	         $('#right-panel').css('position','fixed');
 	         $('#right-panel').css('top','129px');
 	        // $('#right-panel').css('margin-left', offsetX.left);
 	         
 	         //fade button here
 	         if (document.documentElement.scrollTop > 675 || self.pageYOffset > 675) {
 	             //$('#back-to-top-button').fadeIn();
             } else {
                 $('#back-to-top-button').fadeOut();
             }
	    }
	}


    // window.onresize = function()
    //   {
    $(window).bind('resize', function () { 
        var offsetY = self.pageYOffset;
        var offsetX = $(window).width()-loginOffsetX;
        $('body').css('overflow-x', 'visible');
        if( window.XMLHttpRequest ) {
            // $('#right-panel').css('position','absolute');
            //             $('#right-panel').css('float','right');
            //             $('#right-panel').css('top', offsetY - 11);
            //             $('#right-panel').css('margin-left', '0');
            
            $('.login-form').css('position','absolute');
            $('.login-form').css('float','right');
            $('.login-form').css('top', offsetY+13 );
            $('.login-form').css('margin-left', offsetX);
            
            $('#myheader').css('width', $(window).width());
            
            //alert(offsetX)
         }
    }
    
);
        
 //    }
 // }
      
	//alert( "get that voting going")
	//activate the voting
    activate_voting();
    activate_tags();
    activate_login();
    $('#myheader').css('width', $(window).width());
    $('.login-form').css('margin-left', $(window).width()-loginOffsetX);
    var offsetX = $('#articles').offset();
     $('#right-panel').css('position','fixed');
     $('#right-panel').css('top','129px');
     $('#right-panel').css('margin-left', offsetX.left);
    
    //alert("is firefox? " + isff);
    
});