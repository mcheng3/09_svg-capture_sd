var pic = document.getElementById("pic");

var drawCircle = function(e){
    x = e.offsetX;
    y = e.offsetY;
	drawCircleCoords(x, y);
};

var drawCircleCoords = function(cx, cy){
	var c = document.createElementNS( "http://www.w3.org/2000/svg","circle");
	c.setAttribute("cx", cx);
	c.setAttribute("cy", cy);
	c.setAttribute("r", "10");
	c.setAttribute("fill", "lightsteelblue");
	c.addEventListener("click", changeColor, true);
	pic.appendChild(c);
}

var changeColor = function(e){
	this.setAttribute("fill", "black");
	this.removeEventListener("click", changeColor, true);
	this.addEventListener("click", changePos, true);
	e.stopPropagation();
}

var changePos = function(e){
	pic.removeChild(this)
	x = Math.floor(Math.random() * parseInt(pic.getAttribute("width"),10));
	y = Math.floor(Math.random() * parseInt(pic.getAttribute("height"),10));
	drawCircleCoords(x, y);
	e.stopPropagation();
}

var clear = function(){
	while(pic.hasChildNodes()){
		pic.removeChild(pic.firstChild)
	}
}

pic.addEventListener("click", drawCircle);
document.getElementById("clear").addEventListener("click", clear)