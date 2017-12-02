console.log("hello world of giphy");

var topics = ["surfing", "skateboarding", "hang gliding", "snowboarding","parachuting","jet ski"];
//build a loop to create buttons


function renderButtons(){

	$("#topics-view").empty();

	for (var i = 0;i < topics.length; i++)
	{

		var a = $("<button>");
	
	 	a.addClass("sport");
	
	 	a.attr("data-name", topics[i]);

	 	a.text(topics[i]);

	 	$("#topics-view").append(a);
	 
	} 
	
}
	renderButtons()


	$("button").on("click", function(){
		
		var sport = $(this).attr("data-name");
		console.log(sport);
		var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ sport +"&rating=pg&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
      url: queryURL,
      method: 'GET'
    })
    .done(function(response) {
      console.log(response.data);
      
      for (var i = 0; i < 10; i++){
      	var sportDiv = $("<div>");
      	var p = $("<p>").text("Rating: "+ response.data[i].rating);
      	console.log(p);
      	var sportImage = $("<img>");
      	
      	sportImage.attr("src",response.data[i].images.fixed_height_still.url);
      	sportDiv.append(p);
      	
      	sportDiv.append(sportImage);
      	$("#gifs-appear-here").prepend(sportDiv);
      
        console.log(response.data[i].images.fixed_height_still);
        }
      });

	});	
	//renderButtons();

	//event.preventDefault();

//renderButtons();

