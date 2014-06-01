function Platform(id, x, y, center, orientation) {
	//the range that attracts the ship
	this.orientation  = orientation;
	this.hitCounter   = 0;
	this.upColor      = "#1FE82A";
	this.generalColor = "#E81F78";
	this.rangeColor   = this.upColor;
	this.halfWidth    = 0;
	this.halfHeight   = 0;
	this.range = {};
	this.gravOn = false;

	if (this.orientation == "right") {
		this.halfWidth = 0.32;
		this.halfHeight = 0.63;
		this.range = { 
			minX: x-2.8+this.halfWidth, 
			maxX: x-this.halfWidth,
			minY: y-0.7, 
			maxY: y+0.7 
		};
	}
	else if (this.orientation == "left") {
		this.halfWidth = 0.32;
		this.halfHeight = 0.63;
		this.range = { 
			minX: x+this.halfWidth, 
			maxX: x+2.8-this.halfWidth,
			minY: y-0.7, 
			maxY: y+0.7 
		};
	}
	else if (this.orientation == "up") {
		this.halfWidth = 0.77;
		this.halfHeight = 0.32;
		this.range = { 
			minX: x-this.halfWidth, 
			maxX: x+this.halfWidth,
			minY: y+this.halfHeight, 
			maxY: y+2.8-this.halfHeight
		};
	}
	else if (this.orientation == "down") {
		this.halfWidth = 0.77;
		this.halfHeight = 0.32;
		this.range = { 
			minX: x-this.halfWidth, 
			maxX: x+this.halfWidth,
			minY: y-2.8+this.halfHeight, 
			maxY: y-this.halfHeight 
		};
	}
	RectangleEntity.call(this, id, x, y, center, this.generalColor, this.halfWidth, this.halfHeight, false);
	this.type      = "platform";
	this.activated = false;

	this.frames = new Array();
	this.frames[0]="#1FDDE8";
	this.frames[1] ="#1FE82A";
	this.frames[2] = "#E81F78";
	this.currentFrame = 0;
	this.interval = 10;
	this.currentInterval = 0;
	this.type = 'platform';
}

Platform.prototype = new RectangleEntity();
Platform.prototype.constructor = Platform;

Platform.prototype.draw = function(ctx) {
	ctx.save();

	this.drawBlock(ctx);
	if (!theGame.mobile) {
		this.drawDecoration(ctx);
	}
	this.drawRange(ctx);

	ctx.restore();

	this.isHit = false;
}

Platform.prototype.drawBlock = function(ctx) {
	ctx.translate(this.x * SCALE, this.y * SCALE);
	ctx.rotate(this.angle);
	ctx.translate(-(this.x) * SCALE, -(this.y) * SCALE);

	ctx.fillStyle = this.generalColor;
	ctx.fillRect((this.x-this.halfWidth) * SCALE,
				(this.y-this.halfHeight) * SCALE,
				(this.halfWidth*2) * SCALE,
				(this.halfHeight*2) * SCALE);

	ctx.fillStyle = this.upColor;

	if (this.orientation == "down") {
		ctx.fillRect((this.x-this.halfWidth) * SCALE,
				(this.y-this.halfHeight) * SCALE,
				(this.halfWidth*2) * SCALE,
				(this.halfHeight/2) * SCALE);
	}
	else if (this.orientation =="up") {
		ctx.fillRect((this.x-this.halfWidth) * SCALE,
				(this.y+this.halfHeight/2) * SCALE,
				(this.halfWidth*2) * SCALE,
				(this.halfHeight/2) * SCALE);
	}
	else if (this.orientation =="left") {
		ctx.fillRect((this.x+this.halfWidth/2) * SCALE,
				(this.y-this.halfHeight) * SCALE,
				(this.halfWidth/2) * SCALE,
				(this.halfHeight*2) * SCALE);
	}
	else if (this.orientation =="right") {
		ctx.fillRect((this.x-this.halfWidth) * SCALE,
				(this.y-this.halfHeight) * SCALE,
				(this.halfWidth/2) * SCALE,
				(this.halfHeight*2) * SCALE);
	}
}

Platform.prototype.drawRange = function(ctx) {
	ctx.globalAlpha = 0.25;
	ctx.fillStyle = this.rangeColor;
	ctx.beginPath();
	ctx.shadowBlur = 0;
	ctx.fillRect(
			this.range.minX*SCALE, 
			this.range.minY*SCALE, 
			(this.range.maxX-this.range.minX)*SCALE,
			(this.range.maxY-this.range.minY)*SCALE);

}

Platform.prototype.drawDecoration = function(ctx) {
	if (this.currentInterval == this.interval) {
		this.currentInterval = 0;
		this.currentFrame++;
	}

	this.currentInterval++;

	//if at the end of the frame cycle then go back to 0
	if (this.currentFrame == this.frames.length) {
		this.currentFrame = 0;
	}

	ctx.fillStyle = this.frames[this.currentFrame];
	var x,y;
	x = y = 0;
	if (this.orientation == "right") {
		for(var i=0; i< 4; i++) {
			x += i*2;
			ctx.translate(-i*2, 0);
			ctx.beginPath();
			ctx.moveTo( (this.x-this.halfWidth)*SCALE-8, this.y*SCALE);
			ctx.lineTo( (this.x- this.halfWidth)*SCALE - 14, this.y*SCALE-10);
			ctx.lineTo((this.x-this.halfWidth)*SCALE-9, this.y*SCALE);
			ctx.lineTo( (this.x-this.halfWidth)*SCALE -14, this.y*SCALE+10);
			ctx.closePath();
			ctx.fill();
		}
	}
	else if (this.orientation == "left") {
		for(var i=0; i< 4; i++) {
			x -= i*2;
			ctx.translate(i*2, 0);
			ctx.beginPath();
			ctx.moveTo( (this.x+this.halfWidth)*SCALE+8, this.y*SCALE);
			ctx.lineTo( (this.x+this.halfWidth)*SCALE + 14, this.y*SCALE-10);
			ctx.lineTo((this.x+this.halfWidth)*SCALE+9, this.y*SCALE);
			ctx.lineTo( (this.x+this.halfWidth)*SCALE +14, this.y*SCALE+10);
			ctx.closePath();
			ctx.fill();
		}
	}
	else if (this.orientation == "up") {
		for(var i=0; i< 4; i++) {
			y -= i*2;
			ctx.translate(0, i*2);
			ctx.beginPath();
			ctx.moveTo( this.x*SCALE, (this.y+this.halfHeight)*SCALE+8);
			ctx.lineTo( this.x*SCALE+10, (this.y+this.halfHeight)*SCALE+14);
			ctx.lineTo( this.x*SCALE, (this.y+this.halfHeight)*SCALE+9);
			ctx.lineTo( this.x*SCALE-10, (this.y+this.halfHeight)*SCALE+14);
			ctx.closePath();
			ctx.fill();
		}
	}
	else if (this.orientation == "down") {
		for(var i=0; i< 4; i++) {
			y += i*2;
			ctx.translate(0, -i*2);
			ctx.beginPath();
			ctx.moveTo( this.x*SCALE, (this.y-this.halfHeight)*SCALE-8);
			ctx.lineTo( this.x*SCALE+10, (this.y-this.halfHeight)*SCALE-14);
			ctx.lineTo( this.x*SCALE, (this.y-this.halfHeight)*SCALE-9);
			ctx.lineTo( this.x*SCALE-10, (this.y-this.halfHeight)*SCALE-14);
			ctx.closePath();
			ctx.fill();
		}
	}

	ctx.translate(x,y);
}

Platform.prototype.inField = function(position) {
	return (position.x >= this.range.minX &&
		position.x <= this.range.maxX &&
		position.y >= this.range.minY &&
		position.y <= this.range.maxY);
}

Platform.prototype.inZone = function(position, gravityArrows) {
	//if the spaceShip is in the range
	if ( this.inField(position) ) {
		//activate gravityField
		this.gravOn = true;
		gravityArrows.setGrav(this.orientation+"+");
		//say that the spaceShip is in this platform field
		return true;
	}
	//if the gravityField is still on but the spaceShip is outside
	//put it back to normal
	else if (this.gravOn && !this.inField(position)) {
		this.gravOn = false;
		if (gravityArrows.currentGrav.charAt(gravityArrows.currentGrav.length-1)=="+") {
			gravityArrows.currentGrav = gravityArrows.currentGrav.substr(0,
				gravityArrows.currentGrav.length-1);
		}
	}
	return false;
}

Platform.prototype.update = function(state) {
	if (this.isHit && this.hitCounter<200) {
		this.hitCounter++;
		if (this.hitCounter>50) {
			if (this.hitCounter<100) {
				this.upColor = "#DCE81F";
			}
			else if (this.hitCounter<150) {
				this.upColor = "#E88F1F";
			}
		}
		if (this.hitCounter == 200) {
			this.upColor = "#E82B1F";
			this.activated = true;
			media.bumpSound.play();
		}
	}

	//normal behavior
	Entity.prototype.update.call(this,state);
}



