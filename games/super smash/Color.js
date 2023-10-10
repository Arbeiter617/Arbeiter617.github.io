function Color(r, g, b) {
	this.r = r;
	this.g = g;
	this.b = b;
	
	this.fill = function() {
		fill(this.r, this.g, this.b);
	}
	
	this.stroke = function() {
		stroke(this.r, this.g, this.b);
	}
	
	this.equals = function(color) {
		if(this.r === color.r && this.g === color.g && this.b === color.b) {
			return true;
		} else {
			return false;
		}
	}
	
	this.nextColor = function() {
		if(this.r === 220 && this.g === 130 && this.b === 130) {
			/*this.r = 130;
			this.g = 130;
			this.b = 220;*/
			return new Color(130, 130, 220);
		}
		if(this.r === 130 && this.g === 130 && this.b === 220) {
			/*this.r = 130;
			this.g = 220;
			this.b = 130;*/
			return new Color(130, 220, 130);
		}
		if(this.r === 130 && this.g === 220 && this.b === 130) {
			/*this.r = 220;
			this.g = 130;
			this.b = 220;*/
			return new Color(220, 130, 220);
		}
		if(this.r === 220 && this.g === 130 && this.b === 220) {
			/*this.r = 220;
			this.g = 130;
			this.b = 130;*/
			return new Color(220, 130, 130);
		}
	}
}