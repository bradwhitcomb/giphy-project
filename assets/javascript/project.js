console.log("hello world of giphy");

var topics = ["surfing", "skateboarding", "hang gliding", "snowboarding","parachuting","jet ski"];
//create a loop to create buttons


function renderButtons(){

	$("#topics-view").empty();
	for (var i = 0;i < topics.length; i++)
	{

	var a = $("<button>");
	
	 a.addClass("sport");
	// $(this).attr("data-name")
	 a.attr("data-name", topics[i]);

	 a.text(topics[i]);


	 $("#topics-view").append(a);
	 
	 
	
	
	}
}

	//event.preventDefault();

renderButtons();

