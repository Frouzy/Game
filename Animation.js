$(document).ready(function() { 


$("#succes").hide();
$("#result").hide();
$("#startover").addClass("hoverOut");
var score = 0;



$("#Lampidee").click(function() {


//To click anywhere on the page to rig it up on fire, change #Lampidee in document

	score++;
	$("#score").text(score);
	$("#Lampidee").show("slow").fadeOut(3000);
	$("#succes").show("slow").fadeIn(5000);

});


$("#succes").click(function()	{
	$("#result").slideToggle();


});


$("#startover").hover(function()	{
	
	score = 0;
	$("#score").text(score);
	$("#startover").addClass("hoverIn").removeClass("hoverOut");
 	$("body").hide("fast");
});


});



