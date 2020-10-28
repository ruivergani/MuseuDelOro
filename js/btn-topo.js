// JavaScript Document

$(function() { $(window).scroll(function() { 
	if($(this).scrollTop() != 0) { 
		$('#topo').fadeIn();   } 
	else { 
		$('#topo').fadeOut(); 
		} 
	}); 
	$('#topo').click(function() { 
		$('body,html').animate({
			scrollTop:0
			}
		,500); 
		});
});