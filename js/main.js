$(document).ready(function(){
	//top nav
	$home = $("#home");
	$about = $("#about");
	$reviews = $("#reviews");
	$submit = $("#submit");
	$contact = $("#contact");
	
	$upper_nav = $("nav a");
	
	//welcome page buttons
	$join = $("#join");
	$read = $("#read"); 
	$listen = $("#listen");
	$submit_button = $("#submit_button");
	
	//content
	$socialmedia = $("#socialmedia"); 
	
	$join.click(function(){
		$socialmedia.fadeToggle();
		$join.toggleClass("button_sel");
	});
	
	selector = -1; 
	
	$upper_nav.click(function(){
		
	});
	
	
});
