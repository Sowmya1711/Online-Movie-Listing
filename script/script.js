//document).ready(function(){
//.ajax({
	//pe:'POST',
//rl:https://api.themoviedb.org/3/movie/550?7e88c0ec36b4ca4c698151c2a7b98c6a
	//foreSend:function(xhr){
		//r.setRequestHeader("auth-key", "7e88c0ec36b4ca4c698151c2a7b98c6a"
	//
	//ror:function(msg) {alert(msg);}
//;
//
/*$(document).ready(function(){
 $.getJSON("https://api.themoviedb.org/3/movie/550?api_key=7e88c0ec36b4ca4c698151c2a7b98c6a",function(data){
  $.each(data.production_companies,function(key,value){
   console.log(key,value);
   $("#prodComp").append("<li>"+value.first+"</li>");
  });
 });

});*/
(function ($) {
	$.getJSON("http://api.themoviedb.org/3/discover/movie?api_key=22d8568621673d1336e8d0d1fb253821").then(function (data) {
		$.each(data.results,function(key,value){
			console.log(data);
			$("#movieDetails").append('<li><a href="#" onClick="callMovie('+value.id+'); return false;">' + value.title + '</a></li>');
			
		});
		//$("#movieDetails").append('<li><a href="#" onClick="callMovie('+value.id+','+value.overview+'); return false;">' + value.title + '</a></li>');		

	});

})(jQuery);

function callMovie(movieID){
	//console.log(movieID);
	$("#leftPart").css("width","50%");
	$("#right").css("width","50%");
	$.getJSON("http://api.themoviedb.org/3/movie/"+movieID+"?api_key=22d8568621673d1336e8d0d1fb253821").then(function (data) {
	 var image="https://image.tmdb.org/t/p/w500"+data.backdrop_path;
	 $("#movPoster").attr("src",image);
	 $("#title").html("Movie Title : " +data.title);	
	 $("#language").html("Movie Language : " +data.original_language);
	 $("#releaseDate").html("Release Date :" +data.release_date);
	 $("#popularity").html("Popularity :" +data.popularity);
	 $("#overview").html("Overview :"+data.overview);
	 console.log("image:"+image);

	/*console.log("Movie Title:"+data.title);
	console.log("Movie Original Language:"+data.original_language);
	console.log("Movie Release Date:"+data.release_date);
	console.log("Movie Overview:"+data.overview);
	console.log("Movie Popularity:"+data.popularity);
	console.log("Movie Path:"+data.poster_path);*/
	});

}
