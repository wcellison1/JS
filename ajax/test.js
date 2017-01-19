$(document).ready(function(){
	$.ajax({
		dataType: "json",
		url: "http://swapi.co/api/starships",
		success: function(data){
			console.log(data.results.forEach(function(starships){
				console.log(starships.name)
			}))
		}
	});
});
