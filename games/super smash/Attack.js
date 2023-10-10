function Attack(pics) {
	this.frame = 0;
	this.pic = pics;
	
	this.height = function() {
		return this.pic[this.frame].height;
	}
	
	this.width = function() {
		return this.pic[this.frame].width;
	}
	
	this.animate = function() {
		this.frame ++;
		if(this.frame > this.pic.length-1) {
			this.frame = 0;
		}
	}
	
	this.draw = function(x, y) {
		image(this.pic[this.frame], x, y);
	}
	
	this.drawXY = function(x, y, width, height) {
		image(this.pic[this.frame], x, y, width, height);
	}
}