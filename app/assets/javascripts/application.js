// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require turbolinks
//= require_tree .

$(document).ready(function() {
	$("#sort2").sortable({
	      helper:"clone", 
	      opacity:0.5,
	      cursor:"pointer",
	      connectWith: ".list-group",
	      receive: function( event, ui ) {
			$("#history").append("<li>Added "+ui.item.attr('title')+"</li>");
	      }, 
		  remove: function( event, ui ) {
			$("#history").append("<li>Removed "+ui.item.attr('title')+"</li>");
	      }
	});
	
	$("#sort1").sortable({
	      helper:"clone", 
	      opacity:0.5,
	      cursor:"pointer",
	      connectWith: ".list-group"
	});
	
	$( "#sort1, #sort2" ).disableSelection();
		
	$(".element").click(function() {
		$(".element").attr('style', 'background:white');
		$(".element").attr('chosen', 'false');
		$( this ).attr('style', 'background:grey;');
		$( this ).attr('chosen', 'true');
		$("#history").append("<li>Clicked "+$( this ).attr('title')+"</li>");
		$("#overall").hide();
		$(".element_detail").hide();
		$("#"+$( this ).attr('show')).show();
		
		$(".tab_info").hide();
		$("#attributes_"+$( this ).attr('show')).show();

		$(".tab").removeClass('active');
		$("#attributes_tab_"+$( this ).attr('show')).addClass('active');		
	});
		
	$(".tab").click(function() {
		$(".tab_info").hide();
		$(".tab").removeClass('active');
		$( this ).addClass('active');
		$("#"+$( this ).attr('show')).show();
	});

	$("#drop").click(function(e) {
		if($(e.target).is('li')){
            return;
        }
		$(".tab").removeClass('active');
		$("#history_tab").addClass('active');
		
		$(".element_detail").hide();
		$(".element").attr('style', 'background:white');
		$(".element").attr('chosen', 'false');
        $("#overall").show();
		$("#history").show();

	});
});