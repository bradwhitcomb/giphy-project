console.log("hello world of giphy");

var topics = ["surfing", "skateboarding", "hang gliding", "snowboarding","parachuting","jet ski","ice fishing","wind surfing",
"zorbing","blobbing","xpogo","mountain boarding","barefooting","parasailing","BMX"];
//build a loop to create buttons

function alertSportName(){
	var sportName = $(this).attr("data-name");

}


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
	renderButtons();


	$("#add-newSport").on("click", function(event) {
        // event.preventDefault() prevents the form from trying to submit itself.
        // We're using a form so that the user can hit enter instead of clicking the button if they want
        event.preventDefault();

        // This line will grab the text from the input box
        var newSport = $("#newSport-input").val().trim();
        // The movie from the textbox is then added to our array
        topics.push(newSport);
        console.log("after push the new array is " + topics);

        // calling renderButtons which handles the processing of our movie array
        renderButtons();
      });
		

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
      	
      	var sportImage = $("<img>");
      	
      	sportImage.attr("src",response.data[i].images.fixed_height_still.url);
      	sportImage.attr("data-still", response.data[i].images.fixed_height_still.url);
      	sportImage.attr("data-animate", response.data[i].images.fixed_height.url);
      	sportImage.attr("data-state", "still").addClass("gif");
      	sportDiv.append(p);
      	
      	sportDiv.append(sportImage);
      	$("#gifs-appear-here").prepend(sportDiv);
      
        console.log(response.data[i].images.fixed_height);
        }
      

	

		$(".gif").on("click", function(){

			var state = $(this).attr("data-state");
			if (state === "still"){
				$(this).attr("src",$(this).attr("data-animate"));
				$(this).attr("data-state","animate");
			} else{
				$(this).attr("src", $(this).attr("data-still"));
				$(this).attr("data-state", "still");	
				}
			});	
		});
	});

	$(document).on("click",".sport",alertSportName);
	//renderButtons();	
	

	

