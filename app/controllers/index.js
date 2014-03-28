$.container.open();


$.soundbites.addEventListener("click", function(e){
	var globals = require("globals");
	var soundbites = new Alloy.createController("soundbites").getView();
	soundbites.open();
});

$.quotes.addEventListener("click", function(e){
	var quotes = new Alloy.createController("quotes").getView();
	quotes.open();
});

$.gifs.addEventListener("click", function(e){
	var gifs = new Alloy.createController("gifs").getView();
	gifs.open();
});

$.facts.addEventListener("click", function(e){
	var facts = new Alloy.createController("facts").getView();
	facts.open();
});