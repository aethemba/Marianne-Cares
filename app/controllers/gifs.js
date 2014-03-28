function closeWindow(){
	$.container.close();
}

var images = [];
for (var i=0; i<54; i++){
	if (i%4 == 0 ){
		images.push("images/gif1/marianne200"  + ((i<10)?'0'+i:i) + ".jpg");
	}
}
$.image1.images = images;
$.image1.start();

var images2 = []
for (var i=0; i<359; i++){
	if (i%4 == 0 ){
		if (i < 10) {
			images2.push("images/benton/benton000"+ i + ".jpg");
		}
		if (10 < i && i < 100){
			images2.push("images/benton/benton00"+ i + ".jpg");
		}
		if (i > 100){
			images2.push("images/benton/benton0"+ i + ".jpg");
		}
	}
}
$.image2.images = images2;
$.image2.start();

var images3 = []
for (var i=0; i<87; i++){
	if (i%6 == 0 ){
		if (i < 10) {
			images3.push("images/bart/1percentsitup000"+ i + ".jpg");
		}
		if (10 < i && i < 100){
			images3.push("images/bart/1percentsitup00"+ i + ".jpg");
		}
	}
}
$.image3.images = images3;
$.image3.start();