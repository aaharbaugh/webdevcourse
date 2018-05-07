

	var circles = [];

	function onKeyDown(event){

	var randomPoint = Point.random();
	var maxPoint = new Point(view.size.width, view.size.height);
	var point = maxPoint * randomPoint;
	var newCircle = new Path.Circle(point, randomSize());
	newCircle.fillColor = "red";
	circles.push(newCircle);

	}


	function onFrame(event){
	
	for(var i = 0; i < circles.length; i++){
		circles[i].fillColor.hue += 1;
	}
	}

	function colorRandom(){

	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var a = Math.random() * 1;

	var randColor = "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";

	return randColor;

	}

	function randomSize(){

	var size = Math.floor(Math.random() * (75 - 15) + 15);

	return size;

	}