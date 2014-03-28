function closeWindow(){
	$.soundbites.close();
}

function playSound(e){
	switch(e.source.id) {
		case "btn1":
			var player = Ti.Media.createSound({url: "benton.wav"});
			break;
		case "btn2":
			var player = Ti.Media.createSound({url: "buzzer.wav"});
			break;
		case "btn3":
			var player = Ti.Media.createSound({url: "weareyoung.wav"});
			break;
		case "btn4":
			var player = Ti.Media.createSound({url: "katy.wav"});
			break;
		case "btn5":
			var player = Ti.Media.createSound({url: "thatsme.wav"});
			break;
		case "btn6":
			var player = Ti.Media.createSound({url: "hi.wav"});
			break;
		default:
			var player = Ti.Media.createSound({url: "katy.wav"});			
	}
	player.play();
}